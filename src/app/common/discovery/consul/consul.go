package consul

import (
	"app/common/discovery"
	"errors"
	"time"

	"github.com/google/uuid"
	"github.com/hashicorp/consul/api"
)


// Consul discovery agent
type ConsulDiscovery struct {
	Hash          string
	Client        *api.Client
	HasRegistered bool
	Hostname      string
}

type ConsulDiscoveryOpts struct {
	Host string
}

// Initialise the consul client
func (consul *ConsulDiscovery) Init() error {
	config := api.DefaultConfig()

	// Set hostname of consul
	config.Address = consul.Hostname

	// Create client
	client, err := api.NewClient(config)

	if err != nil {
		return err
	}

	consul.Client = client

	return nil
}

func (consul *ConsulDiscovery) Register(identifier string, hostname string, port int) error {
	// If we've previously registered, execute the keep-alive instead
	if consul.HasRegistered {
		return consul.check()
	}

	// Register with consul
	serviceCheck := &api.AgentServiceCheck{TTL: "2s", DeregisterCriticalServiceAfter: "1s", Timeout: "2s"}
	agent := api.AgentServiceRegistration{Address: hostname, Port: port, ID: consul.Hash, Name: identifier, Check: serviceCheck}

	if err := consul.Client.Agent().ServiceRegister(&agent); err != nil {
		return err
	}

	consul.HasRegistered = true

	return consul.check()
}

// Deregister this service from consul
func (consul *ConsulDiscovery) Deregister(identifier string) error {
	return consul.Client.Agent().ServiceDeregister(consul.Hash)
}

// Find a service within consul
func (consul *ConsulDiscovery) Find(service string) (*discovery.DiscoveredService, error) {
	// Filter to ensure alive services only
	opts := &api.QueryOptions{}
	opts.AllowStale = false
	opts.RequireConsistent = true
	opts.MaxAge = time.Duration(2000)
	svc, _, err := consul.Client.Catalog().Service(service, "", opts)

	if err != nil {
		return &discovery.DiscoveredService{}, err
	}

	// No services found
	if len(svc) < 1 {
		return &discovery.DiscoveredService{}, errors.New("no services were found")
	}

	// Pass down a reference to the service.
	return &discovery.DiscoveredService{
		Name:       svc[0].ServiceName,
		Address:    svc[0].ServiceAddress,
		Port:       svc[0].ServicePort,
		Identifier: svc[0].ID,
	}, nil
}

// Handle the keep-alive with consul so we still exist.
func (consul *ConsulDiscovery) check() error {
	if err := consul.Client.Agent().UpdateTTL("service:"+consul.Hash, "true", "pass"); err != nil {
		return err
	}

	return nil
}

// Create a new consul client.
func NewConsulDiscovery(hostname string, opts ...func(discovery *ConsulDiscovery) error) (discovery.DiscoveryAgent, error) {
	consulAgent := &ConsulDiscovery{Hostname: hostname, HasRegistered: false, Hash: uuid.New().String()}

	for _, opt := range opts {
		if err := opt(consulAgent); err != nil {
			return nil, err
		}
	}

	if err := consulAgent.Init(); err != nil {
		return nil, err
	}

	return consulAgent, nil
}
