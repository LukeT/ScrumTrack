package common

import (
	"app/common/helpers"
	"app/services/ticket/proto"
	"github.com/jinzhu/copier"
)

func GetLocationType(ticket *Ticket) ticket_svc_ticket.LocationType {
	if ticket.LocationType == Sprint {
		return ticket_svc_ticket.LocationType_sprint
	} else if ticket.LocationType == Backlog {
		return ticket_svc_ticket.LocationType_backlog
	}

	return ticket_svc_ticket.LocationType_pending
}

func ToProto(ticket *Ticket) *ticket_svc_ticket.Ticket {
	trans := &ticket_svc_ticket.Ticket{}
	copier.Copy(trans, ticket)
	trans.LocationType = GetLocationType(ticket)
	trans.Status = helpers.StatusToWire(ticket.Status)

	if ticket.PreviousTicket.Valid {
		trans.PreviousTicket = ticket.PreviousTicket.Int32
	}

	if ticket.SprintId.Valid {
		trans.SprintId = ticket.SprintId.Int32
	}

	return trans
}

func CommentToProto(ticket *TicketComment) *ticket_svc_ticket.TicketComment {
	trans := &ticket_svc_ticket.TicketComment{}
	copier.Copy(trans, ticket)

	return trans

}
