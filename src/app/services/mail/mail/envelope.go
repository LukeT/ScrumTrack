package mail

type Envelope struct {
	To           string
	ToName       string
	Subject      string
	Template     string
	TemplateVars map[string]string
}

// Build a new request
func NewEnvelope(opts ...func(*Envelope)) *Envelope {
	env := &Envelope{}

	for _, v := range opts {
		v(env)
	}

	return env
}

// Set the email receiver.
func SetTo(to string, name string) func(*Envelope) {
	return func(env *Envelope) {
		env.To = to
		env.ToName = name
	}
}

// Set the template we are using to send the email
func SetTemplate(id string, vars map[string]string) func(*Envelope) {
	return func(env *Envelope) {
		env.Template = id
		env.TemplateVars = vars
	}
}
