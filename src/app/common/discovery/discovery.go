package discovery

import "errors"

type DiscoveredService struct {
	Address    string
	Port       int
	Identifier string
	Name       string
}

// Base type for a discovery agent
type DiscoveryAgent interface {
	Register(identifier string, hostname string, port int) error
	Deregister(identifier string) error
	Find(svc string) (*DiscoveredService, error)
}

// Implement stub service discovery agent
type StubDiscoveryAgent struct {
}

// Stub registering a service
func (agent *StubDiscoveryAgent) Register(identifier string, hostname string, port int) error {
	println("Danger! No discovery agent is defined")

	return nil
}

// Stub deregistering a service
func (agent *StubDiscoveryAgent) Deregister(identifier string) error {
	println("Danger! No discovery agent is defined")

	return nil
}

// Stub finding a service
func (agent *StubDiscoveryAgent) Find(id string) (*DiscoveredService, error) {
	return &DiscoveredService{}, errors.New("no discovery agents are configured to find svc")
}

func NewStubDiscoveryAgent() DiscoveryAgent {
	return &StubDiscoveryAgent{}
}
