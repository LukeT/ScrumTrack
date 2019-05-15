package implementations

import (
	"app/services/mail/mail"
	"github.com/sendgrid/sendgrid-go"
	mail2 "github.com/sendgrid/sendgrid-go/helpers/mail"
)

type SendgridEmailProvider struct {
	From   *mail2.Email
	Client *sendgrid.Client
}

// Send an email
func (provider *SendgridEmailProvider) Send(env *mail.Envelope) error {
	mailer := mail2.NewV3Mail()
	mailer.SetTemplateID(env.Template)
	mailer.SetFrom(provider.From)

	// Set sender
	person := mail2.NewPersonalization()
	person.AddTos(mail2.NewEmail(env.ToName, env.To))

	// Set template
	for k, v := range env.TemplateVars {
		person.SetDynamicTemplateData(k, v)
	}

	mailer.AddPersonalizations(person)

	// Send the email.
	_, err := provider.Client.Send(mailer)

	return err
}

func NewSendgrid(from string, name string, key string) *SendgridEmailProvider {
	return &SendgridEmailProvider{
		Client: sendgrid.NewSendClient(key),
		From:   mail2.NewEmail(name, from),
	}
}
