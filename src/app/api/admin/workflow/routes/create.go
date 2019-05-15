package routes

import (
	"app/api/workflow/common"
	"app/common/errors"
	"app/common/helpers"
	"app/common/service/api"
	"app/services/workflow/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
)

type CreatePayload struct {
	*api.RequestPayload
	Order    int      `json:"order"`
	MaxItems uint     `json:"maxItems"`
	Name     string   `json:"name" validate:"required"`
	Allow    []uint32 `json:"allow"`
	Status helpers.TicketStatus `json:"status" validate:"required,oneof=open in-progress closed"`
}

func Create(req api.Request, res *api.Response) interface{} {
	workflowClient := ticket_svc_workflow.GetWorkflowClient(req.Service)

	validate := validator.New()
	payload := &CreatePayload{RequestPayload: &api.RequestPayload{}}
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	wf := &ticket_svc_workflow.WorkflowConfiguration{
		Name: payload.Name,
		Allow: payload.Allow,
		MaxItems: uint32(payload.MaxItems),
		Order: uint32(payload.Order),
		Status: helpers.StatusToWire(payload.Status),
	}

	created, createErr := workflowClient.Create(context.Background(), wf)

	// Error while calling service
	if createErr != nil {
		return errors.HttpInternalError(res, createErr)
	}

	// Unable to update workflow
	if created.Error != nil {
		return errors.HttpValidationError(res, created.Error.Error)
	}

	return common.MakeCurrentResponse(created.Workflow)
}
