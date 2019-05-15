package common

import (
	"app/common/helpers"
	"app/services/history/proto"
	"strconv"
)

type CurrentResponseLog struct {
	Id          int32 `json:"id"`
	TicketId string `json:"ticketId"`
	SprintId     int32 `json:"sprintId"`
	Type string `json:"type"`
	Old string `json:"oldValue"`
	New string `json:"newValue"`
	Internal bool `json:"internal"`
	CreatedAt int64 `json:"createdAt"`
}

// Transform a ticket comment
func MakeCurrentResponseLog(log *ticket_svc_history.LogItem) *CurrentResponseLog {
	resp := &CurrentResponseLog{}

	resp.Id = log.Id
	resp.TicketId = log.ProjectCode + "-" + strconv.Itoa(int(log.TicketId))
	resp.Type = string(helpers.LogFromWire(log.Type))
	resp.Old = log.Old
	resp.New = log.New
	resp.CreatedAt = log.CreatedAt
	resp.Internal = log.Internal

	resp.SprintId = log.SprintId

	return resp
}

// Transform multiple ticket comments
func MakeCurrentResponseLogMult(comments []*ticket_svc_history.LogItem) *[]*CurrentResponseLog {
	newRes := make([]*CurrentResponseLog, len(comments))

	for k, v := range comments {
		newRes[k] = MakeCurrentResponseLog(v)
	}

	return &newRes
}
