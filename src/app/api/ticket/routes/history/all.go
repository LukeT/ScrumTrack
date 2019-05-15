package history

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/history/proto"
	"app/services/ticket/proto"
	"context"
	"strconv"
)

func All(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	historyClient := ticket_svc_history.GetHistoryClient(req.Service)
	id, convErr := strconv.Atoi(req.URLParams["ticketId"])

	// Invalid ticket ID
	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Fetch the ticket
	getRequest := &ticket_svc_ticket.GetRequest{ProjectSC: req.Project.Shortcode, TicketId: int32(id)}

	if resp, getErr := userClient.Get(context.Background(), getRequest); resp.Error != nil || getErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Fetch comments
	logs, err := historyClient.GetByTicket(context.Background(), &ticket_svc_history.LogTicket{ProjectCode:req.Project.Shortcode, TicketId: int32(id) })

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if logs.Error != nil {
		return errors.HttpValidationError(res, logs.Error.Error)
	}

	return common.MakeCurrentResponseLogMult(logs.Logs)
}
