package routes

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
)

type CreateTicketPayload struct {
	*api.RequestPayload
	Title string `json:"title" validate:"required"`
	Body  string `json:"body" validate:"required"`
	Category string  `json:"category"`
}

func Create(req api.Request, res *api.Response) interface{} {
	// Validate payload of ticket
	payload := &CreateTicketPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)

	// Build ticket
	ticket := &ticket_svc_ticket.Ticket{}
	ticket.Title = payload.Title
	ticket.Body = payload.Body
	ticket.ProjectCode = req.Project.Shortcode
	ticket.CreatorUserId = req.CurrentUser
	ticket.Category = payload.Category

	// Create the ticket
	new, err := userClient.Create(context.Background(), ticket)

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if new.Error != nil {
		return errors.HttpValidationError(res, new.Error.Error)
	}

	return common.MakeCurrentResponse(new.Ticket)
}
