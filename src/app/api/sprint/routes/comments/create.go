package comments

import (
	"app/api/sprint/common"
	"app/common/errors"
	"app/common/service/api"
	ticket_svc_sprint "app/services/sprint/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type CreateTicketCommentPayload struct {
	*api.RequestPayload

	Message string `json:"message" validate:"required"`
	Type string `json:"type" validate:"required"`

}

func Create(req api.Request, res *api.Response) interface{} {
	// Parse payload
	payload := &CreateTicketCommentPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	// Handle validation errors
	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	id, convErr := strconv.Atoi(req.URLParams["sprintId"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "Sprint not found")
	}

	sprintSvc := ticket_svc_sprint.GetSprintsClient(req.Service)

	// Create a new sprint
	comment, err := sprintSvc.AddComment(context.Background(), &ticket_svc_sprint.SprintComment{
		ProjectCode: req.Project.Shortcode,
		AuthorId: req.CurrentUser,
		Message: payload.Message,
		Type: payload.Type,
		SprintId: int32(id),
	})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Return created sprint
	return common.MakeCurrentResponseComment(comment.Comment)
}
