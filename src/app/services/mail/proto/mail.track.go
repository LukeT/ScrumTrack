// Code generated by protoc-gen-track. DO NOT EDIT.ss
// source: src/app/services/mail/proto/mail.proto
package ticket_svc_mail

import (
	"app/common/service/interfaces"
	"google.golang.org/grpc"
)

var PackageName = "ticket.svc.mail"


func RegisterMailHandler(svc interfaces.Svc, user MailServer) {
	svc.RegisterService(func(svc interfaces.Svc, server *grpc.Server) {
		RegisterMailServer(server, user)
	})
}

func GetMailClient(svc interfaces.Svc) MailClient {
	return NewMailClient(svc.FindService("ticket.svc.mail"))
}


