package interfaces

import (
	"app/common/discovery"

	"github.com/jinzhu/gorm"
	"github.com/op/go-logging"
	"google.golang.org/grpc"
)

type Svc interface {
	GetDb() *gorm.DB
	GetRegistry() *discovery.DiscoveryAgent
	FindService(name string) *grpc.ClientConn
	GetLog() *logging.Logger
	RegisterService(fn func(svc Svc, rpc *grpc.Server))
	GetUI() string
}
