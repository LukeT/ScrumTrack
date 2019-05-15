package routes

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type UpdateTicketPayload struct {
	*api.RequestPayload
	Title  string `json:"title" validate:"required"`
	Body   string `json:"body" validate:"required"`
	Weight int32  `json:"weight"`
	Category string  `json:"category"`
	AssigneeId int32 `json:"assigneeId"`
}

func Update(req api.Request, res *api.Response) interface{} {
	payload := &UpdateTicketPayload{}
	validate := validator.New()

	req.Decode(payload)
	err := validate.Struct(payload)

	// handle invalid payload
	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	id, convErr := strconv.Atoi(req.URLParams["ticketId"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Fetch the ticket
	ticketRes, err := userClient.Get(context.Background(), &ticket_svc_ticket.GetRequest{ProjectSC: req.Project.Shortcode, TicketId: int32(id)})

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if ticketRes.Error != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Update the ticket
	ticket := ticketRes.Ticket

	ticket.Title = payload.Title
	ticket.Body = payload.Body
	ticket.Weight = payload.Weight
	ticket.Category = payload.Category

	if payload.AssigneeId != 0 {
		ticket.AssigneeUserId = payload.AssigneeId
	}

	if payload.Weight != 0 {
		ticket.Weight = payload.Weight
	}

	// Update and return
	update, err := userClient.Update(context.Background(), ticket)

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if update.Error != nil {
		return errors.HttpValidationError(res, update.Error.Error)
	}

	return common.MakeCurrentResponse(update.Ticket)
}
