package routes

import (
	"app/common/errors"
	"app/common/proto"
	"app/common/service/api"
	"app/services/project/proto"
	"context"
)

func All(req api.Request, res *api.Response) interface{} {
	projectClient := ticket_svc_project.GetProjectsClient(req.Service)
	project, err := projectClient.GetAll(context.Background(), &ticket_common.Empty{})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	if project.Error != nil {
		return errors.HttpNotFound(res, "Not found")
	}

	return project.Project
}
