package routes

import (
	"app/api/sprint/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"context"
)

func History(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_sprint.GetSprintsClient(req.Service)
	sprints, err := userClient.GetHistoricSprints(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	if sprints.Error != nil {
		return errors.HttpNotFound(res, sprints.Error.Error)
	}

	// Return all previous sprints
	return common.MakeCurrentResponseMult(sprints.Sprints)
}
