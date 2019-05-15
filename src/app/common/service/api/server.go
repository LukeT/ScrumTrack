package api

import (
	"app/common/service/interfaces"
	"app/router/proto"
	"context"
	"strings"
	"sync"
)

type Server struct {
	Svc         interfaces.Svc
	Handlers    []Handler
	HandleMutex sync.Mutex
	Table       *RouteTable
}

// Register the route handler
func (srv *Server) Register(handler Handler) {
	srv.HandleMutex.Lock()
	srv.Handlers = append(srv.Handlers, handler)
	srv.Table.Insert(string(handler.Method), handler.Path, &handler)
	srv.HandleMutex.Unlock()
}

// Call a route
func (srv *Server) Call(ctx context.Context, request *ticket_router.Request) (*ticket_router.Response, error) {
	handler, params, err := srv.Table.Find(strings.ToLower(request.Method), request.Path)

	// Unable to find a handler
	if err != nil {
		return &ticket_router.Response{
			Error:  "\"No such route\"",
			Status: 404,
		}, nil
	}

	// Execute the route handler.
	resp := handler.Execute(MakeRequest(srv.Svc, request, params))
	response := &ticket_router.Response{}

	// Build a response.
	response.Status = int32(resp.Status)
	response.Body = resp.Body
	response.Error = resp.Error

	if resp.RawError != nil {
		srv.Svc.GetLog().Errorf("Handler %s %s thrown: %s", strings.ToUpper(string(request.Method)), request.Path, resp.RawError.Error())
	}

	return response, nil
}
