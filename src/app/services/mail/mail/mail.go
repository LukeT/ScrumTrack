package mail

type EmailProvider interface {
	Send(env *Envelope) error
}
