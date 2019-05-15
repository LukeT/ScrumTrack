package routes

import (
	"app/api/sprint/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"context"
)

func Active(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_sprint.GetSprintsClient(req.Service)
	sprint, err := userClient.GetActiveSprint(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Handle no active sprint
	if sprint.Error != nil {
		return errors.HttpNotFound(res, sprint.Error.Error)
	}

	// Transform sprint
	return common.MakeCurrentResponse(sprint.Sprint)
}
