package comments

import (
	"app/common/errors"
	"app/common/service/api"
	ticket_svc_sprint "app/services/sprint/proto"
	"context"
	"strconv"
)


func Delete(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_sprint.GetSprintsClient(req.Service)

	cId, convErr := strconv.Atoi(req.URLParams["id"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "comment not found")
	}

	_, err := userClient.DeleteComment(context.Background(), &ticket_svc_sprint.SprintCommentId{
		Project: req.Project.Shortcode,
		Id: int32(cId),
	})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	return nil
}
