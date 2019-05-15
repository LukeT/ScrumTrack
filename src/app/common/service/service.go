package service

import (
	"app/common/discovery"
	"app/common/discovery/consul"
	"app/common/service/api"
	"app/common/service/db"
	"app/common/service/interfaces"
	"app/router/proto"
	"flag"
	"fmt"
	"math/rand"
	"net"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/op/go-logging"
	"google.golang.org/grpc"
)

type Service struct {
	Name       string
	Agent      discovery.DiscoveryAgent
	API        *api.Server
	DB         *db.DB
	Port       int
	ExternalIP string
	Host       string
	UI string
	Log        *logging.Logger

	Servers     []func(svc interfaces.Svc, server *grpc.Server)
	ServerMutex sync.Mutex
}

// Register and maintain service state
func (svc *Service) registerDiscovery(t *time.Ticker) {
	if err := svc.Agent.Register(svc.Name, svc.ExternalIP, svc.Port); err != nil {
		svc.Log.Warningf("Unable to register service with discovery agent: %s", err.Error())
	} else {
		svc.Log.Debugf("Registered with discovery agent on %s:%d", svc.Host, svc.Port)
	}

	for ; true; <-t.C {
		if err := svc.Agent.Register(svc.Name, svc.ExternalIP, svc.Port); err != nil {
			svc.Log.Warningf("Unable to execute health check with discovery agent: %s", err.Error())
		}
	}
}

// Register all rpc handlers and servers
func (svc *Service) registerHandlers() {
	if len(svc.API.Handlers)+len(svc.Servers) >= 1 {
		lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%d", svc.Port))
		if err != nil {
			svc.Log.Fatalf("Failed to listen %s", err.Error())
		}

		grpcServer := grpc.NewServer()

		// If we have some handlers to register, we should start the api service
		if len(svc.API.Handlers) > 0 {
			ticket_router.RegisterRouterServer(grpcServer, svc.API)
		}

		// Register all of the server handlers
		for _, key := range svc.Servers {
			key(svc, grpcServer)
		}

		if err := grpcServer.Serve(lis); err != nil {
			svc.Log.Fatalf("Unable to start rpc server: %s", err.Error())
		}
	} else {
		svc.Log.Debug("No RPC handlers or servers have been defined, skipping boot")
	}
}

// Start and serve the service
func (svc *Service) Run(ready ...func(svc interfaces.Svc)) {
	svc.API.Svc = svc

	// Start a timer for discovery
	t := time.NewTicker(time.Second * 1)

	// Connect to everything!
	if err := svc.DB.Connect(); err != nil {
		svc.Log.Fatalf("Unable to create database connection: %s", err.Error())

		return
	}

	// Register with service discovery.
	go svc.registerDiscovery(t)

	// Boot the RPC Servers
	go svc.registerHandlers()

	if len(ready) > 0 {
		go ready[0](svc)
	}

	svc.Log.Debugf("Service \"%s\" has been started!", svc.Name)

	// Listen for an exit signal
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, syscall.SIGTERM, syscall.SIGINT, syscall.SIGQUIT)
	<-ch

	// Clean everything up
	svc.DB.Close()
	svc.Agent.Deregister(svc.Name)
	t.Stop()
}

// Fetch the GORM database instance
func (svc *Service) GetDb() *gorm.DB {
	return svc.DB.DB
}

// Fetch the current active agent
func (svc *Service) GetRegistry() *discovery.DiscoveryAgent {
	return &svc.Agent
}

// Fetch the active logger
func (svc *Service) GetLog() *logging.Logger {
	return svc.Log
}

// Register an RPC service
func (svc *Service) RegisterService(fn func(svc interfaces.Svc, rpc *grpc.Server)) {
	svc.ServerMutex.Lock()
	svc.Servers = append(svc.Servers, fn)
	svc.ServerMutex.Unlock()
}

// Make an API Handler
func (svc *Service) MakeHandler(method api.Method, path string, fn api.HandlerFn) api.Handler {
	return api.MakeHandler(method, path, fn)
}

// Register an API Handler
func (svc *Service) RegisterRoute(handler api.Handler) {
	svc.Log.Debugf("Registering route %s %s", strings.ToUpper(string(handler.Method)), handler.Path)
	svc.API.Register(handler)
}

// Create the RPC connection
func (svc *Service) ConnectTo(service *discovery.DiscoveredService) *grpc.ClientConn {
	cc, err := grpc.Dial(service.Address+":"+strconv.Itoa(service.Port), grpc.WithInsecure())

	if err != nil {
		println(err)

		return &grpc.ClientConn{}
	}

	return cc
}

// Find a service within service discovery.
func (svc *Service) FindService(name string) *grpc.ClientConn {
	agent, err := svc.Agent.Find(name)

	if err != nil {
		return &grpc.ClientConn{}
	}

	return svc.ConnectTo(agent)
}

func (svc *Service) GetUI() string {
	return svc.UI
}

// Create a new service
func CreateService(str string) Service {
	// Load configuration variables.
	rand.Seed(time.Now().UnixNano())
	outPort := rand.Intn(10000) + 30000

	ui := flag.String("ui", "http://127.0.0.1:8082", "url to web ui")
	port := flag.String("port", string(outPort), "port to bind to")
	dbUsername := flag.String("db-username", "root", "database username")
	dbPassword := flag.String("db-password", "root", "database password")
	dbDatabase := flag.String("db-db", "university", "database db")
	dbHost := flag.String("db-host", "localhost", "database hostname")
	dbPort := flag.Int("db-port", 3306, "database port")
	consulHost := flag.String("consul", "http://localhost:8500", "consul agent")
	externalIP := flag.String("external-ip", "127.0.0.1", "service ip")
	flag.Parse()

	if p, err := strconv.Atoi(*port); err == nil {
		outPort = p
	}

	// Create consul agent
	var agent = discovery.NewStubDiscoveryAgent()
	consulAgent, err := consul.NewConsulDiscovery(*consulHost)

	if err == nil {
		agent = consulAgent
	}


	// Configure logger.
	logging.SetFormatter(logging.MustStringFormatter(
		`%{color}%{time:15:04:05.000} %{shortfunc} ▶ %{level} %{color:reset} %{message}`,
	))
	logging.SetBackend(logging.NewLogBackend(os.Stdout, "", 0))

	// Create the service
	return Service{
		Name:       str,
		UI: *ui,
		Agent:      agent,
		Port:       outPort,
		ExternalIP: *externalIP,
		API:        &api.Server{Table: api.MakeRouteTable()},
		DB: &db.DB{
			Username: *dbUsername,
			Password: *dbPassword,
			Database: *dbDatabase,
			Host:     *dbHost,
			Port:     *dbPort,
		},
		ServerMutex: sync.Mutex{},
		Log:         logging.MustGetLogger("svc"),
		Servers:     make([]func(svc interfaces.Svc, server *grpc.Server), 0),
	}
}
