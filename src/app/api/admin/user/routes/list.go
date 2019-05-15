package routes

import (
	"app/api/admin/user/common"
	"app/common/errors"
	"app/common/proto"
	"app/common/service/api"
	"app/services/user/proto"
	"context"
)

func List(req api.Request, res *api.Response) interface{} {
	// Fetch all API services
	userClient := ticket_svc_user.NewUserClient(req.Service.FindService(ticket_svc_user.PackageName))
	users, err := userClient.GetAll(context.Background(), &ticket_common.Empty{})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Transform all users into api-friendly users.
	list := make([]*common.UserResponse, len(users.Users))

	for k, v := range users.Users {
		list[k] = common.MakeUserResponse(v)
	}

	return list
}
