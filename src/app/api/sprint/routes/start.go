package routes

import (
	"app/api/sprint/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"app/services/ticket/proto"
	"context"
	"time"
)

func Start(req api.Request, res *api.Response) interface{} {
	sprintSvc := ticket_svc_sprint.GetSprintsClient(req.Service)
	ticketSvc := ticket_svc_ticket.GetTicketsClient(req.Service)

	// Get the current sprint
	sprint, err := sprintSvc.GetActiveSprint(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode})

	if err != nil || sprint.Error != nil || sprint.Sprint.EndAt != 0 {
		return errors.HttpNotFound(res, "No eligible sprint was found")
	}

	// Update the sprint start and end
	sprint.Sprint.StartedAt = time.Now().Unix()
	sprint.Sprint.EndAt = time.Now().AddDate(0, 0, 7*int(sprint.Sprint.Duration)).Unix()

	if _, err := sprintSvc.Update(context.Background(), sprint.Sprint); err != nil {
		return errors.HttpInternalError(res, err)
	}

	// Fetch all tickets that are in the sprint.
	tickets, err := ticketSvc.GetAll(context.Background(), &ticket_svc_ticket.GetAllRequest{
		ProjectSC:    req.Project.Shortcode,
		LocationType: ticket_svc_ticket.LocationType_sprint,
		SprintId:     sprint.Sprint.Id,
	})

	if err != nil || tickets.Error != nil {
		return errors.HttpInternalError(res, err)
	}

	// Update the workflow order.
	for k, v := range tickets.Tickets {
		v.WorkflowPosition = int32(k)

		ticketSvc.Update(context.Background(), v)
	}

	return common.MakeCurrentResponse(sprint.Sprint)
}
