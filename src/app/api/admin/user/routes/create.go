package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
)

type CreatePayload struct {
	*api.RequestPayload
	Username  string `json:"username" validate:"required"`
	Email     string `json:"email" validate:"required,email"`
	FirstName string `json:"firstName" validate:"required"`
	LastName  string `json:"lastName" validate:"required"`
	Role      string `json:"role" validate:"required,oneof=admin user"`
	Password  string `json:"password" validate:"required"`
}

func Create(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	payload := &CreatePayload{}
	validate := validator.New()

	// Handle validation errors
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	_, errUser := userClient.GetByUsername(context.Background(), &ticket_svc_user.Username{Username: payload.Username})
	_, errEmail := userClient.GetByEmail(context.Background(), &ticket_svc_user.Email{Email: payload.Email})

	// Handle invalid username
	if errUser == nil {
		return errors.HttpValidationError(res, "Username is already in use")
	}

	// Handle invalid email
	if errEmail == nil {
		return errors.HttpValidationError(res, "Email is already in use")
	}

	// Create a new user.
	user := &ticket_svc_user.AuthUser{}
	user.Username = payload.Username
	user.Email = payload.Email
	user.Role = payload.Role
	user.FirstName = payload.FirstName
	user.LastName = payload.LastName
	user.Password = payload.Password
	user.Active = true
	user.Disabled = false

	// Create the user
	id, createErr := userClient.Create(context.Background(), user)

	if nil != createErr {
		return errors.HttpInternalError(res, createErr)
	}

	return id
}
