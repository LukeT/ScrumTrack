package common

import (
	"app/common/helpers"
	"app/common/service/interfaces"
	"app/services/history/proto"
	"fmt"
	"github.com/jinzhu/copier"
)

func FromProto(ticket *ticket_svc_history.LogItem) *TicketHistory {
	res := &TicketHistory{}

	// Copy all common fields
	copier.Copy(res, ticket)

	res.SprintId = interfaces.MakeNullInt32(ticket.SprintId)
	res.Type = helpers.LogFromWire(ticket.Type)
	res.Internal = !!ticket.Internal
	fmt.Println(res.Internal)

	return res
}
