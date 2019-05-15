package routes

import (
	"app/api/admin/workflow/common"
	"app/common/errors"
	"app/common/helpers"
	"app/common/service/api"
	"app/services/workflow/proto"
	"context"
	"github.com/jinzhu/copier"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type UpdatePayload struct {
	*api.RequestPayload
	Order    int      `json:"order"`
	MaxItems uint     `json:"maxItems"`
	Name     string   `json:"name" validate:"required"`
	Allow    []uint32 `json:"allow"`
	Status helpers.TicketStatus `json:"status" validate:"required,oneof=open in-progress closed"`
}

func Update(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_workflow.GetWorkflowClient(req.Service)

	// Convert the ID to an int
	id, errCo := strconv.Atoi(req.URLParams["id"])

	if errCo != nil {
		return errors.HttpInternalError(res, errCo)
	}

	// Decode and verify the http payload
	validate := validator.New()
	payload := &UpdatePayload{RequestPayload: &api.RequestPayload{}}
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Find the workflow column
	user, err := userClient.GetOne(context.Background(), &ticket_svc_workflow.WorkflowId{WorkflowId: int32(id)})

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Copy fields to user struct
	copier.Copy(user.Workflow, payload)
	user.Workflow.Allow = payload.Allow
	user.Workflow.Status = helpers.StatusToWire(payload.Status)

	update, createErr := userClient.Update(context.Background(), user.Workflow)

	// Error while calling service
	if createErr != nil {
		return errors.HttpInternalError(res, createErr)
	}

	// Unable to update workflow
	if update.Error != nil {
		return errors.HttpValidationError(res, update.Error.Error)
	}

	return common.MakeCurrentResponse(update.Workflow)
}
