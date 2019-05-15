package comments

import (
	"app/common/errors"
	"app/common/service/api"
	ticket_svc_sprint "app/services/sprint/proto"
	"context"
	"strconv"
)


func Resolve(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_sprint.GetSprintsClient(req.Service)

	id, convErr := strconv.Atoi(req.URLParams["sprintId"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	cId, convErr := strconv.Atoi(req.URLParams["id"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "comment not found")
	}

	_, err := userClient.ResolveComment(context.Background(), &ticket_svc_sprint.SprintCommentIdWithSprint{
		Project: req.Project.Shortcode,
		SprintId: int32(id),
		Id: int32(cId),
	})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	return nil
}
