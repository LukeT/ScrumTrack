package main

import (
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/auth/proto"
	"context"
	"errors"
	"sync"
)

type Auth struct {
	Service   interfaces.Svc
	KnownKeys []string
	Mut       sync.Mutex
}

func (auth *Auth) Create(_ context.Context, state *ticket_svc_auth.SessionState) (*ticket_svc_auth.Session, error) {
	// Generate a token
	str, err := Generate(state)

	if err != nil {
		return &ticket_svc_auth.Session{}, err
	}

	// Store the session token
	auth.Mut.Lock()
	auth.KnownKeys = append(auth.KnownKeys, str)
	auth.Mut.Unlock()

	return &ticket_svc_auth.Session{Token: str}, nil
}

func (auth *Auth) Validate(_ context.Context, sess *ticket_svc_auth.Session) (*ticket_svc_auth.SessionState, error) {
	// Validate the token is valid
	state, err := Validate(sess.Token)

	if err != nil {
		return &ticket_svc_auth.SessionState{}, err
	}

	// Check it's valid in the in-memory store
	valid := false

	for _, v := range auth.KnownKeys {
		if v == sess.Token {
			valid = true
		}
	}

	if !valid {
		return &ticket_svc_auth.SessionState{}, errors.New("invalid session token")
	}

	return state, nil
}

func (auth *Auth) Destroy(_ context.Context, sess *ticket_svc_auth.Session) (*ticket_svc_auth.Status, error) {
	status := false

	// Remove the token from the in-memory store if it exists.
	auth.Mut.Lock()
	for i, v := range auth.KnownKeys {
		if v == sess.Token {
			status = true
			auth.KnownKeys = append(auth.KnownKeys[:i], auth.KnownKeys[i+1:]...)
		}
	}
	auth.Mut.Unlock()

	return &ticket_svc_auth.Status{Status: status}, nil
}

func main() {
	svc := service.CreateService(ticket_svc_auth.PackageName)

	ticket_svc_auth.RegisterAuthHandler(&svc, &Auth{&svc, make([]string, 0), sync.Mutex{}})

	svc.Run()
}
