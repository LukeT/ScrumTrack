package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	ticket_svc_ticket "app/services/ticket/proto"
	"context"
	"time"
)

func Stop(req api.Request, res *api.Response) interface{} {
	sprintSvc := ticket_svc_sprint.GetSprintsClient(req.Service)
	ticketSvc := ticket_svc_ticket.GetTicketsClient(req.Service)

	// Get the current sprint
	sprint, err := sprintSvc.GetActiveSprint(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode})

	if err != nil || sprint.Error != nil || sprint.Sprint.EndAt == 0 {
		return errors.HttpNotFound(res, "No eligible sprint was found")
	}

	// Set the sprints end time.
	sprint.Sprint.EndAt = time.Now().Unix()

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

	// Move unclosed tickets into the top of backlog.
	//for _, v := range tickets.Tickets {
	//	if v.Status != ticket_common.TicketStatus_Closed {
	//		_, err := ticketSvc.Move(context.Background(), &ticket_svc_ticket.MoveRequest{
	//			ProjectCode: req.Project.Shortcode, TicketId: int32(v.Id), PreviousTicket: nil,
	//		})
	//	}
	//}

	// Return created sprint.
	return sprint
}
