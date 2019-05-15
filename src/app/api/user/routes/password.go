package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
)

type PasswordPayload struct {
	*api.RequestPayload
	NewPassword string `json:"newPassword" validate:"required"`
	Password    string `json:"password" validate:"required"`
}

func Password(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	payload := &PasswordPayload{RequestPayload: &api.RequestPayload{}}
	validate := validator.New()

	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Fetch the user to authenticate
	user, userErr := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: req.CurrentUser})

	if userErr != nil {
		return errors.HttpInternalError(res, userErr)
	}

	// Verify the password is correct
	check, passErr := userClient.CheckPassword(context.Background(), &ticket_svc_user.PasswordCheck{UserId: int32(req.CurrentUser), Password: payload.Password})

	if passErr != nil || check.Status == false {
		return errors.HttpValidationError(res, "Incorrect Password")
	}

	// Update the user
	user.Password = payload.NewPassword
	_, updateErr := userClient.Update(context.Background(), user)

	if err != nil {
		return errors.HttpInternalError(res, updateErr)
	}

	return nil
}
