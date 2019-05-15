package common

import (
	"app/services/ticket/proto"
	"strconv"
)

type CurrentResponseComment struct {
	Id       int32  `json:"id"`
	TicketId string `json:"ticketId"`
	Body     string `json:"body"`
	UserId   int32  `json:"userId"`
}

// Transform a ticket comment
func MakeCurrentResponseComment(user *ticket_svc_ticket.TicketComment) *CurrentResponseComment {
	resp := &CurrentResponseComment{}

	resp.Id = user.Id
	resp.TicketId = user.ProjectCode + "-" + strconv.Itoa(int(user.TicketId))
	resp.Body = user.Body
	resp.UserId = user.UserId

	return resp
}

// Transform multiple ticket comments
func MakeCurrentResponseCommentMult(comments []*ticket_svc_ticket.TicketComment) *[]*CurrentResponseComment {
	newRes := make([]*CurrentResponseComment, len(comments))

	for k, v := range comments {
		newRes[k] = MakeCurrentResponseComment(v)
	}

	return &newRes
}
