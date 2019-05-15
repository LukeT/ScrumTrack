package comments

import (
	"app/api/sprint/common"
	"app/common/errors"
	"app/common/service/api"
	ticket_svc_sprint "app/services/sprint/proto"
	"context"
	"strconv"
)


func All(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_sprint.GetSprintsClient(req.Service)

	id, convErr := strconv.Atoi(req.URLParams["sprintId"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	comments, err := userClient.GetComments(context.Background(), &ticket_svc_sprint.SprintIdAndProject{
		Project: req.Project.Shortcode,
		SprintId: int32(id),
	})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	return common.MakeCurrentResponseCommentMult(comments.Comments)
}
