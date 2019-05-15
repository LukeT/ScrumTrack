package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"strconv"
)

type ResetPayload struct {
	*api.RequestPayload
	Password    string `json:"password" validate:"required"`
}


func Reset(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	payload := req.Decode(&ResetPayload{}).(*ResetPayload)

	id, convErr := strconv.Atoi(req.URLParams["id"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "User not found")
	}

	user, err := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: int32(id) })

	if err != nil || user.Id == 0 || user.ResetToken == "" || user.ResetToken != req.URLParams["token"] {
		return errors.HttpNotFound(res, "User not found")
	}

	// Update the user
	user.Password = payload.Password
	user.ResetToken = ""
	_, updateErr := userClient.Update(context.Background(), user)

	if updateErr != nil {
		return errors.HttpInternalError(res, updateErr)
	}

	return nil
}
