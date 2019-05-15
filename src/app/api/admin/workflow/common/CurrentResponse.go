package common

import (
	"app/common/helpers"
	"app/services/workflow/proto"
	"github.com/jinzhu/copier"
)

type CurrentResponse struct {
	Id                   uint32              `json:"id"`
	Name                 string              `json:"name"`
	MaxItems             uint32              `json:"maxItems"`
	Order                uint32              `json:"order"`
	Allow                []uint32            `json:"allow"`
	Status               helpers.TicketStatus `json:"status"`
}

// Transform a ticket to JSON.
func MakeCurrentResponse(wf *ticket_svc_workflow.WorkflowConfiguration) *CurrentResponse {
	resp := &CurrentResponse{}

	copier.Copy(&resp, &wf)

	resp.Status = helpers.StatusFromWire(wf.Status)

	return resp
}

// Transform multiple tickets.
func MakeCurrentResponseMult(wfs []*ticket_svc_workflow.WorkflowConfiguration) *[]*CurrentResponse {
	newRes := make([]*CurrentResponse, len(wfs))

	for k, v := range wfs {
		newRes[k] = MakeCurrentResponse(v)
	}

	return &newRes
}
