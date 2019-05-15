package routes

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
	"strconv"
)

func Get(req api.Request, res *api.Response) interface{} {
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

	return common.MakeCurrentResponse(ticketRes.Ticket)
}
