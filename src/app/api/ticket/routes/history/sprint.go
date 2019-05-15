package history

import (
	"app/api/ticket/common"
	"app/common/errors"
	"app/common/service/api"
	"app/services/history/proto"
	ticket_svc_sprint "app/services/sprint/proto"
	"context"
	"strconv"
)

func Sprint(req api.Request, res *api.Response) interface{} {
	sprintsClient := ticket_svc_sprint.GetSprintsClient(req.Service)
	historyClient := ticket_svc_history.GetHistoryClient(req.Service)

	id, convErr := strconv.Atoi(req.URLParams["sprintId"])

	// Handle invalid ticket id
	if convErr != nil {
		return errors.HttpNotFound(res, "Sprint not found")
	}

	s, err := sprintsClient.GetById(context.Background(), &ticket_svc_sprint.SprintById{Id: int32(id) })

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	request := &ticket_svc_history.LogSprint{
		SprintId: int32(id), ProjectCode: req.Project.Shortcode,
	}

	if val, ok := req.QueryParams["from"]; ok {
		if val, err := strconv.Atoi(val); err == nil {
			if int64(val) > s.Sprint.StartedAt {
				request.From = int64(val)
			} else {
				request.From = s.Sprint.StartedAt
			}
		}
	}

	if val, ok := req.QueryParams["to"]; ok {
		if val, err := strconv.Atoi(val); err == nil {
			request.To = int64(val)
		}
	}
	sprint, err := historyClient.GetBySprint(context.Background(), request)

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	return common.MakeCurrentResponseLogMult(sprint.Logs)
}
