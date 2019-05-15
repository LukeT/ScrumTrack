package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"app/services/ticket/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type MoveTicketPayload struct {
	*api.RequestPayload
	Ticket   int32 `json:"previousTicket"`
	SprintId int32 `json:"sprintId"`
}

func Move(req api.Request, res *api.Response) interface{} {
	// Validate Payload
	payload := &MoveTicketPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	sprintClient := ticket_svc_sprint.GetSprintsClient(req.Service)

	// Convert id to string
	id, convErr := strconv.Atoi(req.URLParams["ticketId"])

	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Fetch ticket
	ticketRes, err := userClient.Get(context.Background(), &ticket_svc_ticket.GetRequest{ProjectSC: req.Project.Shortcode, TicketId: int32(id)})

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if ticketRes.Error != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// If we've moving within a sprint, confirm it exists.
	if payload.SprintId != 0 {
		if resp, err := sprintClient.GetById(context.Background(), &ticket_svc_sprint.SprintById{
			Id: payload.SprintId,
		}); err != nil || resp.Error != nil {
			return errors.HttpNotFound(res, "Sprint not found")
		}
	}

	reqq, moveReq := userClient.Move(context.Background(), &ticket_svc_ticket.MoveRequest{
		ProjectCode: req.Project.Shortcode, TicketId: int32(id), PreviousTicket: payload.Ticket, SprintId: payload.SprintId,
	})

	if moveReq != nil {
		return errors.HttpInternalError(res, err)
	}

	return reqq
}
