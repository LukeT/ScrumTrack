// Code generated by protoc-gen-track. DO NOT EDIT.ss
// source: src/app/services/user/proto/user.proto
package ticket_svc_user

import (
	"app/common/service/interfaces"
	"google.golang.org/grpc"
)

var PackageName = "ticket.svc.user"


func RegisterUserHandler(svc interfaces.Svc, user UserServer) {
	svc.RegisterService(func(svc interfaces.Svc, server *grpc.Server) {
		RegisterUserServer(server, user)
	})
}

func GetUserClient(svc interfaces.Svc) UserClient {
	return NewUserClient(svc.FindService("ticket.svc.user"))
}


