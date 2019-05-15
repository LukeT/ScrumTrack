package routes

import (
	"app/api/user/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"github.com/jinzhu/copier"
	"gopkg.in/go-playground/validator.v9"
)

type UpdatePayload struct {
	*api.RequestPayload
	Username  string `json:"username" validate:"required"`
	Email     string `json:"email" validate:"required,email"`
	FirstName string `json:"firstName" validate:"required"`
	LastName  string `json:"lastName" validate:"required"`
	Role      string `json:"role" validate:"required,oneof=admin user"`
}

func Update(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)

	// validate payload
	payload := &UpdatePayload{RequestPayload: &api.RequestPayload{}}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Fetch the user
	user, err := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: req.CurrentUser})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Copy fields to user struct
	copier.Copy(user, payload)

	// Update the user
	update, createErr := userClient.Update(context.Background(), user)

	if createErr != nil {
		return errors.HttpInternalError(res, createErr)
	}

	if update.Error != nil {
		return errors.HttpValidationError(res, update.Error.Error)
	}

	return common.MakeCurrentResponse(update.User, true)
}
