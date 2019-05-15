package middleware

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/auth/proto"
	"context"
	"strings"
)

func getHeader(header string) string {
	head := strings.Split(header, " ")

	if len(head) < 2 {
		return ""
	}

	return head[1]
}

// Require that a user is authenticated
func IsAuthenticated(fn api.HandlerFn) api.HandlerFn {
	return func(req api.Request, res *api.Response) interface{} {
		client := ticket_svc_auth.NewAuthClient(req.Service.FindService(ticket_svc_auth.PackageName))
		head := getHeader(req.Raw.Headers["Authorization"])

		// Invalid header
		if head == "" {
			return errors.HttpUnauthorized(res)
		}

		// Validate token with Auth service
		Session, err := client.Validate(context.Background(), &ticket_svc_auth.Session{Token: head})

		if err != nil {
			return errors.HttpUnauthorized(res)
		}

		// Cache user id
		req.CurrentUser = Session.UserId

		return fn(req, res)
	}
}

// Validate the user is authenticated as a role
func IsAuthenticatedAs(fn api.HandlerFn, role string) api.HandlerFn {
	return func(req api.Request, res *api.Response) interface{} {
		client := ticket_svc_auth.NewAuthClient(req.Service.FindService(ticket_svc_auth.PackageName))
		head := getHeader(req.Raw.Headers["Authorization"])

		if head == "" {
			return errors.HttpUnauthorized(res)
		}

		// Call to auth service
		Session, err := client.Validate(context.Background(), &ticket_svc_auth.Session{Token: head})

		// Verify role
		if err != nil || Session.Role != role {
			return errors.HttpUnauthorized(res)
		}

		// Cache user id
		req.CurrentUser = Session.UserId

		return fn(req, res)
	}
}
