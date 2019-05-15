package routes

import (
	"app/api/admin/user/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"github.com/jinzhu/copier"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type UpdatePayload struct {
	*api.RequestPayload
	Username  string `json:"username" validate:"required"`
	Email     string `json:"email" validate:"required,email"`
	FirstName string `json:"firstName" validate:"required"`
	LastName  string `json:"lastName" validate:"required"`
}

func Update(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	validate := validator.New()

	// Convert userId to an int
	id, errCo := strconv.Atoi(req.URLParams["id"])

	if errCo != nil {
		return errors.HttpInternalError(res, errCo)
	}

	// Decode payload into UpdatePayload
	payload := &UpdatePayload{RequestPayload: &api.RequestPayload{}}
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Fetch a user by their ID
	user, err := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: int32(id)})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Copy fields to user struct
	copier.Copy(user, payload)
	update, createErr := userClient.Update(context.Background(), user)

	// Handle service errors
	if createErr != nil {
		return errors.HttpInternalError(res, createErr)
	}

	// Handle validation errors
	if update.Error != nil {
		return errors.HttpValidationError(res, update.Error.Error)
	}

	return common.MakeUserResponse(update.User)
}
