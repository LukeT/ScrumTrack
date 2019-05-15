package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/auth/proto"
	"app/services/user/proto"
	"context"
)

type LoginPayload struct {
	*api.RequestPayload
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Token string `json:"token"`
}

func Login(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	authClient := ticket_svc_auth.GetAuthClient(req.Service)
	payload := req.Decode(&LoginPayload{}).(*LoginPayload)

	// Get a user by their username
	a, err := userClient.GetByUsername(context.Background(), &ticket_svc_user.Username{Username: payload.Username})

	if err != nil {
		return errors.HttpUnauthorizedMsg(res, "Invalid username or password")
	}

	// Verify the username and password are correct.
	pass, passError := userClient.CheckPassword(context.Background(), &ticket_svc_user.PasswordCheck{UserId: a.Id, Password: payload.Password})

	if passError != nil || !pass.Status {
		return errors.HttpUnauthorizedMsg(res, "Invalid username or password")
	}

	// Generate and return the session token
	token, tokenErr := authClient.Create(context.Background(), &ticket_svc_auth.SessionState{UserId: a.Id, Role: a.Role})

	if tokenErr != nil {
		return errors.HttpInternalError(res, tokenErr)
	}

	return token
}
