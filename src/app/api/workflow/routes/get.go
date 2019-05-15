package routes

import (
	"app/api/workflow/common"
	"app/common/errors"
	"app/common/proto"
	"app/common/service/api"
	"app/services/workflow/proto"
	"context"
)

func Get(req api.Request, res *api.Response) interface{} {
	workflowClient := ticket_svc_workflow.GetWorkflowClient(req.Service)

	workflow, err := workflowClient.Get(context.Background(), &ticket_common.Empty{})

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if workflow.Error != nil {
		return errors.HttpNotFound(res, "Workflow not defined")
	}

	if workflow.Workflows == nil {
		return []ticket_svc_workflow.WorkflowConfiguration{}
	}

	return common.MakeCurrentResponseMult(workflow.Workflows)
}
