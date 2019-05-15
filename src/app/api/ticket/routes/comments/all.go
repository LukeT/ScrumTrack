package comments

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
	"strconv"
)

func All(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
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
	comments, err := userClient.GetComments(context.Background(), getRequest)

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if comments.Error != nil {
		return errors.HttpValidationError(res, comments.Error.Error)
	}

	return common.MakeCurrentResponseCommentMult(comments.Comments)
}
