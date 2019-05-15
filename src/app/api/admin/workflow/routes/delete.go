package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/workflow/proto"
	"context"
	"strconv"
)

func Delete(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_workflow.GetWorkflowClient(req.Service)

	// Convert id to int
	id, err := strconv.Atoi(req.URLParams["id"])

	if err != nil {
		return errors.HttpValidationError(res, "Unable to delete workflow")
	}

	// Find the workflow column
	_, userErr := userClient.GetOne(context.Background(), &ticket_svc_workflow.WorkflowId{WorkflowId: int32(id)})

	if userErr != nil {
		return errors.HttpNotFound(res, "Workflow not found")
	}

	// Delete the workflow column
	_, delErr := userClient.Delete(context.Background(), &ticket_svc_workflow.WorkflowId{WorkflowId: int32(id)})

	if delErr != nil {
		return errors.HttpInternalError(res, delErr)
	}

	return nil
}
