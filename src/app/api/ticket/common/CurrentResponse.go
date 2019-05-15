package common

import (
	"app/common/helpers"
	"app/services/ticket/proto"
	"strconv"
)

type CurrentResponse struct {
	Id               string `json:"id"`
	Location         string `json:"location"`
	Title            string `json:"title"`
	Body             string `json:"body"`
	Weight           int32  `json:"weight"`
	Status           string  `json:"status"`
	CreatorId        int32  `json:"creatorId"`
	AssigneeId       *int32 `json:"assigneeId"`
	Category       string`json:"category"`
	WorkflowId       int32  `json:"workflowId"`
	WorkflowPosition int32  `json:"workflowPosition"`
}

// Transform a ticket to JSON.
func MakeCurrentResponse(user *ticket_svc_ticket.Ticket) *CurrentResponse {
	resp := &CurrentResponse{}

	resp.Id = user.ProjectCode + "-" + strconv.Itoa(int(user.Id))
	resp.Location = user.LocationType.String()
	resp.Title = user.Title
	resp.Body = user.Body
	resp.Weight = user.Weight
	resp.Status = string(helpers.StatusFromWire(user.Status))
	resp.CreatorId = user.CreatorUserId
	resp.AssigneeId = &user.AssigneeUserId
	resp.Category = user.Category

	resp.WorkflowId = user.WorkflowId
	resp.WorkflowPosition = user.WorkflowPosition

	if user.AssigneeUserId == 0 {
		resp.AssigneeId = nil
	}

	return resp
}

// Transform multiple tickets.
func MakeCurrentResponseMult(user []*ticket_svc_ticket.Ticket) *[]*CurrentResponse {
	newRes := make([]*CurrentResponse, len(user))

	for k, v := range user {
		newRes[k] = MakeCurrentResponse(v)
	}

	return &newRes
}
