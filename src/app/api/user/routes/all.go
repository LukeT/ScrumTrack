package routes

import (
	"app/api/user/common"
	"app/common/errors"
	"app/common/proto"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
)

func All(req api.Request, res *api.Response) interface{} {
	// fetch all users
	userClient := ticket_svc_user.NewUserClient(req.Service.FindService(ticket_svc_user.PackageName))
	users, err := userClient.GetAll(context.Background(), &ticket_common.Empty{})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Build new list
	list := make([]*common.CurrentResponse, len(users.Users))

	// Fetch minimal copy of all users
	for k, v := range users.Users {
		list[k] = common.MakeCurrentResponse(v, false)
	}

	return list
}
