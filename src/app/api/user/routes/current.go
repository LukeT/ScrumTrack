package routes

import (
	"app/api/user/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
)

func Current(req api.Request, res *api.Response) interface{} {
	// Fetch current user.
	userClient := ticket_svc_user.GetUserClient(req.Service)
	a, err := userClient.GetById(context.Background(), &ticket_svc_user.Id{Id: req.CurrentUser})

	if err != nil {
		return errors.HttpNotFound(res, "Unable to find user")
	}

	return common.MakeCurrentResponse(a, true)
}
