package routes

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"app/services/ticket/proto"
	"context"
	"fmt"
	"sort"
	"strconv"
)

func getType(params map[string]string) ticket_svc_ticket.LocationType {
	if val, ok := params["type"]; ok {
		if val == "backlog" {
			return ticket_svc_ticket.LocationType_backlog
		} else if val == "pending" {
			return ticket_svc_ticket.LocationType_pending
		}
	}

	return ticket_svc_ticket.LocationType_sprint
}

func All(req api.Request, res *api.Response) interface{} {
	// Build initial request
	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)
	query := &ticket_svc_ticket.GetAllRequest{}
	query.ProjectSC = req.Project.Shortcode
	query.LocationType = getType(req.URLParams)

	// We're finding tickets in a sprint
	if query.LocationType == ticket_svc_ticket.LocationType_sprint {
		if req.URLParams["sprintId"] != "" {
			id, convErr := strconv.Atoi(req.URLParams["sprintId"])

			// Handle invalid sprint id
			if convErr != nil {
				return errors.HttpNotFound(res, "Sprint not found")
			}

			query.SprintId = int32(id)
		} else {
			sprint, err := ticket_svc_sprint.GetSprintsClient(req.Service).GetActiveSprint(context.Background(), &ticket_svc_sprint.SprintByProject{ProjectId: req.Project.Shortcode})

			// Sprint doesn't exist, we have no tickets
			if err != nil || sprint.Error != nil {
				return common.MakeCurrentResponseMult(make([]*ticket_svc_ticket.Ticket, 0))
			}

			query.SprintId = sprint.Sprint.Id
		}
	}

	// Filter by a given workflow Id
	if val, ok := req.QueryParams["workflowId"]; ok {
		fmt.Println(val, ok)
		if val, err := strconv.Atoi(val); err == nil {
			query.WorkflowId = int32(val)
		}
	}

	// fetch all tickets
	user, err := userClient.GetAll(context.Background(), query)

	if err != nil {
		return errors.HttpInternalError(res, err)
	} else if user.Error != nil {
		return errors.HttpValidationError(res, user.Error.Error)
	}

	// If filtering by workflow, sort by wF ID instead of linked list
	if query.WorkflowId != 0 {
		sort.Slice(user.Tickets, func(i, j int) bool {
			return user.Tickets[i].WorkflowPosition < user.Tickets[j].WorkflowPosition
		})

		return common.MakeCurrentResponseMult(user.Tickets)
	}

	return common.MakeCurrentResponseMult(common.Sort(user.Tickets))
}
