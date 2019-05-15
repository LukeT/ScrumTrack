package common

import (
	"app/common/helpers"
	"app/common/proto"
	"app/common/service/interfaces"
	"app/services/history/proto"
	"context"
	"fmt"
	"github.com/jinzhu/copier"
)

type TicketSnapshot struct {
	Id          int32 `gorm:"primary_key"`

	Title  string `sql:"type:text;"`
	Body   string
	Weight int32

	LocationType LocationType
	SprintId     interfaces.NullInt32
	Status helpers.TicketStatus

	PreviousTicket interfaces.NullInt32 // order in LocationType

	WorkflowId       int32
	WorkflowPosition int32

	AssigneeUserId int32
}

func TakeSnapshot(ticket *Ticket) *TicketSnapshot {
	snap := &TicketSnapshot {}

	copier.Copy(snap, ticket)

	return snap
}

func CompareSnapshot(svc interfaces.Svc, snap *TicketSnapshot, ticket *Ticket) {
	historyService := ticket_svc_history.GetHistoryClient(svc)
	var sprintId int32

	if ticket.SprintId.Valid {
		sprintId = ticket.SprintId.Int32
	}


	// Check if assignee has changed.
	if snap.AssigneeUserId != ticket.AssigneeUserId {
		_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
			SprintId: sprintId,
			TicketId: ticket.Id,
			ProjectCode: ticket.ProjectCode,
			Type: ticket_common.LogType_ASSIGNEE_CHANGED,
			Old: fmt.Sprintf("%d", snap.AssigneeUserId),
			New: fmt.Sprintf("%d", ticket.AssigneeUserId),
		})

		if err != nil {
			print(err)
		}
	}

	// Check if title has changed
	if snap.Title != ticket.Title {
		_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
			SprintId: sprintId,
			TicketId: ticket.Id,
			ProjectCode: ticket.ProjectCode,
			Type: ticket_common.LogType_TITLE_CHANGED,
			Old: snap.Title,
			New: ticket.Title,
		})

		if err != nil {
			print(err)
		}
	}

	// Check if title has changed
	if snap.Weight != ticket.Weight {
		_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
			SprintId: sprintId,
			TicketId: ticket.Id,
			ProjectCode: ticket.ProjectCode,
			Type: ticket_common.LogType_WEIGHT_CHANGED,
			Old: fmt.Sprintf("%d", snap.Weight),
			New: fmt.Sprintf("%d", ticket.Weight),
		})

		if err != nil {
			print(err)
		}
	}

	// Status has changed
	if snap.Status != ticket.Status {
		_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
			SprintId: sprintId,
			TicketId: ticket.Id,
			ProjectCode: ticket.ProjectCode,
			Type: ticket_common.LogType_STATUS_CHANGED,
			Old: string(snap.Status),
			New: string(ticket.Status),
		})

		if err != nil {
			print(err)
		}
	}

	// Wf has changed
	if snap.WorkflowId != ticket.WorkflowId {
		_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
			SprintId: sprintId,
			TicketId: ticket.Id,
			ProjectCode: ticket.ProjectCode,
			Type: ticket_common.LogType_LOCATION_CHANGED,
			Old: fmt.Sprintf("%d", snap.WorkflowId),
			New: fmt.Sprintf("%d", ticket.WorkflowId),
			Internal: true,
		})

		if err != nil {
			print(err)
		}
	}

	// Sprint has changed.
	if snap.SprintId != ticket.SprintId {
		// Sprints are weird.. so:

		// Log the ticket was removed from the sprint.
		if snap.SprintId.Valid {
			var oldSprintId int32

			if snap.SprintId.Valid {
				oldSprintId = snap.SprintId.Int32
			}

			_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
				SprintId: oldSprintId,
				TicketId: ticket.Id,
				ProjectCode: ticket.ProjectCode,
				Type: ticket_common.LogType_SPRINT_CHANGED,
				Old: fmt.Sprintf("%d", snap.SprintId.Int32),
			})

			if err != nil {
				print(err)
			}
		}


		// Log the ticket was added to the sprint.
		if ticket.SprintId.Valid {
			_, err := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
				SprintId: sprintId,
				TicketId: ticket.Id,
				ProjectCode: ticket.ProjectCode,
				Type: ticket_common.LogType_SPRINT_CHANGED,
				New: fmt.Sprintf("%d", sprintId),
			})

			if err != nil {
				print(err)
			}

			// Log some metadata
			_, err1 := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
				SprintId: sprintId,
				TicketId: ticket.Id,
				ProjectCode: ticket.ProjectCode,
				Type: ticket_common.LogType_WEIGHT_CHANGED,
				New: fmt.Sprintf("%d", ticket.Weight),
				Internal:true,
			})

			_, err2 := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
				SprintId: sprintId,
				TicketId: ticket.Id,
				ProjectCode: ticket.ProjectCode,
				Type: ticket_common.LogType_TITLE_CHANGED,
				New: fmt.Sprintf("%s", ticket.Title),
				Internal:true,
			})

			_, err3 := historyService.Log(context.Background(), &ticket_svc_history.LogItem{
				SprintId: sprintId,
				TicketId: ticket.Id,
				ProjectCode: ticket.ProjectCode,
				Type: ticket_common.LogType_STATUS_CHANGED,
				New: fmt.Sprintf("%s", ticket.Status),
				Internal:true,
			})

			if err != nil || err1 != nil || err2 != nil || err3 != nil {
				print(err)
			}
		}
	}
}
