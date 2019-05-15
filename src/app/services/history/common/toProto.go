package common

import (
	"app/common/helpers"
	ticket_svc_history "app/services/history/proto"
	"github.com/jinzhu/copier"
)

func ToProto(ticket *TicketHistory) *ticket_svc_history.LogItem {
	trans := &ticket_svc_history.LogItem{}

	copier.Copy(trans, ticket)

	trans.Type = helpers.LogToWire(ticket.Type)
	trans.CreatedAt = ticket.CreatedAt.Unix()

	if ticket.SprintId.Valid {
		trans.SprintId = ticket.SprintId.Int32
	}

	return trans
}
