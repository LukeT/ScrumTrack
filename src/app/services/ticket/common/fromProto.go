package common

import (
	"app/common/helpers"
	"app/common/service/interfaces"
	"app/services/ticket/proto"
	"github.com/jinzhu/copier"
)

func FromLocationType(t ticket_svc_ticket.LocationType) LocationType {
	if t == ticket_svc_ticket.LocationType_sprint {
		return Sprint
	} else if t == ticket_svc_ticket.LocationType_backlog {
		return Backlog
	}

	return Pending
}

func FromProto(ticket *ticket_svc_ticket.Ticket) *Ticket {
	res := &Ticket{}

	// Copy all common fields
	copier.Copy(res, ticket)

	res.LocationType = FromLocationType(ticket.LocationType)
	res.PreviousTicket = interfaces.MakeNullInt32(ticket.PreviousTicket)
	res.SprintId = interfaces.MakeNullInt32(ticket.SprintId)
	res.Status = helpers.StatusFromWire(ticket.Status)

	return res
}

func CommentFromProto(ticket *ticket_svc_ticket.TicketComment) *TicketComment {
	res := &TicketComment{}

	// Copy all common fields
	copier.Copy(res, ticket)

	return res
}
