package main

import (
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/mail/mail"
	"app/services/mail/mail/implementations"
	"app/services/mail/proto"
	"context"
)

type MailSvc struct {
	Service interfaces.Svc
	Mailer  mail.EmailProvider
}

// Send an email
func (t *MailSvc) Post(ctx context.Context, env *ticket_svc_mail.Envelope) (*ticket_svc_mail.Stamp, error) {
	envelope := mail.NewEnvelope(
		mail.SetTo(env.To, env.Name),
		mail.SetTemplate(env.Template, env.Variables),
	)

	err := t.Mailer.Send(envelope)

	return &ticket_svc_mail.Stamp{Sent: err == nil}, nil
}

func main() {
	svc := service.CreateService(ticket_svc_mail.PackageName)
	sg := implementations.NewSendgrid("no-reply@track.luket.io", "Track NoReply", "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")

	ticket_svc_mail.RegisterMailHandler(&svc, &MailSvc{
		Service: &svc,
		Mailer:  sg,
	})

	svc.Run()
}
