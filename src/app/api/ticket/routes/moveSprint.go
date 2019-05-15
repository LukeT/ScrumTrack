package routes

import (
	"app/common/errors"
	"app/common/helpers"
	"app/common/proto"
	"app/common/service/api"
	"app/services/sprint/proto"
	"app/services/ticket/proto"
	"app/services/workflow/proto"
	"context"
	"fmt"
	"gopkg.in/go-playground/validator.v9"
	"strconv"
)

type MoveSprintTicketPayload struct {
	*api.RequestPayload
	WorkflowId   int32 `json:"workflowId"`
	Order int32 `json:"order"`
}

func MoveSprint(req api.Request, res *api.Response) interface{} {
	// Validate Payload
	payload := &MoveSprintTicketPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	// Register clients
	ticketsClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	sprintClient := ticket_svc_sprint.GetSprintsClient(req.Service)
	wfClient := ticket_svc_workflow.GetWorkflowClient(req.Service)

	// Convert ID to int
	id, convErr := strconv.Atoi(req.URLParams["ticketId"])

	if convErr != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// Fetch the current ticket
	ticketRes, err := ticketsClient.Get(context.Background(), &ticket_svc_ticket.GetRequest{ProjectSC: req.Project.Shortcode, TicketId: int32(id)})

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if ticketRes.Error != nil {
		return errors.HttpNotFound(res, "Ticket not found")
	}

	// If we've moving within a sprint, confirm it exists.
	resp, err := sprintClient.GetActiveSprint(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode })

	if err != nil || resp.Error != nil || resp.Sprint.Id != ticketRes.Ticket.SprintId {
		return errors.HttpNotFound(res, "Ticket not in active sprint.")
	}

	// Fetch and verify workflow rules
	cols, colsErr := wfClient.Get(context.Background(), &ticket_common.Empty{})

	if colsErr != nil || cols.Error != nil {
		return errors.HttpNotFound(res, "Invalid workflow configuration")

	}

	validMode := false
	validDest := false

	// Check the workflow move is valid
	for _, item := range cols.Workflows {
		if ticketRes.Ticket.WorkflowId == int32(item.Id) {
			// If no allow rules are defined, any move is ok
			if item.Allow == nil {
				validMode = true
				// Else we should check that allow contains this id.
			} else if helpers.Contains(item.Allow, uint32(payload.WorkflowId)) {
				validMode = true
			}
		}

		fmt.Println(payload.WorkflowId)
		fmt.Println(int32(item.Id))

		if payload.WorkflowId == int32(item.Id) {
			validDest = true
		}
	}

	// This can't be a valid move, bail!
	if !validMode || !validDest {
		return errors.HttpValidationError(res, "Invalid workflow move")
	}

	// Move the ticket!
	_, moveErr := ticketsClient.MoveWithinSprint(context.Background(), &ticket_svc_ticket.MoveWithinSprintRequest{
		WorkflowId: payload.WorkflowId,
		ProjectCode: req.Project.Shortcode,
		Order: payload.Order,
		TicketId: ticketRes.Ticket.Id,
	})

	if moveErr != nil {
		return errors.HttpInternalError(res, err)
	}

	return nil
}
