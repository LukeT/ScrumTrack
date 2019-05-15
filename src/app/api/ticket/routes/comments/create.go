package comments

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type CreateCommentPayload struct {
	*api.RequestPayload
	Body string `json:"body" validate:"required"`
}

func Create(req api.Request, res *api.Response) interface{} {
	// Validate Payload
	payload := &CreateCommentPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Fetch ticket
	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	id, convErr := strconv.Atoi(req.URLParams["ticketId"])

	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	getRequest := &ticket_svc_ticket.GetRequest{ProjectSC: req.Project.Shortcode, TicketId: int32(id)}

	if resp, getErr := userClient.Get(context.Background(), getRequest); resp.Error != nil || getErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Build comment
	ticket := &ticket_svc_ticket.TicketComment{
		UserId:      req.CurrentUser,
		TicketId:    getRequest.TicketId,
		ProjectCode: getRequest.ProjectSC,
		Body:        payload.Body,
	}

	// Store comment
	comments, err := userClient.CreateComment(context.Background(), ticket)

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if comments.Error != nil {
		return errors.HttpValidationError(res, comments.Error.Error)
	}

	return common.MakeCurrentResponseComment(comments.Comment)
}
