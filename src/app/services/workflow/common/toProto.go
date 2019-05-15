package common

import (
	"app/common/helpers"
	"app/services/workflow/proto"
	"github.com/jinzhu/copier"
)

func ToProto(rule *WorkflowRule) *ticket_svc_workflow.WorkflowConfiguration {
	trans := &ticket_svc_workflow.WorkflowConfiguration{}
	copier.Copy(trans, rule)

	trans.Allow = make([]uint32, len(rule.Allowed))
	trans.Status = helpers.StatusToWire(rule.Status)

	for k, v := range rule.Allowed {
		trans.Allow[k] = uint32(v.Id)
	}

	return trans
}
