package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
	"strconv"
)

func Delete(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)

	// Convert userId to an int
	id, err := strconv.Atoi(req.URLParams["id"])

	if err != nil || id == int(req.CurrentUser) {
		return errors.HttpValidationError(res, "Unable to delete yourself")
	}

	// Fetch the user from the database
	_, userErr := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: int32(id)})

	if userErr != nil {
		return errors.HttpNotFound(res, "User not found")
	}

	// Delete the user from the database
	_, delErr := userClient.Delete(context.Background(), &ticket_svc_user.Id{Id: int32(id)})

	if delErr != nil {
		return errors.HttpInternalError(res, delErr)
	}

	return nil
}
