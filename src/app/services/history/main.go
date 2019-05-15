package main

import (
	ticket_common "app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/history/common"
	"app/services/history/proto"
	"context"
	"github.com/jinzhu/gorm"
	"time"
)

type TicketHistorySvc struct {
	Service interfaces.Svc
}

func (h *TicketHistorySvc) GetBySprint(_ context.Context, req *ticket_svc_history.LogSprint) (*ticket_svc_history.LogsResponse, error) {
	history := &[]common.TicketHistory{}
	resp := &ticket_svc_history.LogsResponse{}

	query := h.Service.GetDb().Where("project_code = ? AND sprint_id = ?", req.ProjectCode, req.SprintId);

	if req.From != 0 {
		query = query.Where("created_at >= ?", time.Unix(req.From, 0))
	}

	if req.To != 0 {
		query = query.Where("created_at <= ?", time.Unix(req.To, 0))
	}

	// Find all sprints that have finished.
	if err := query.Find(history).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No logs"}

		return resp, nil
	}

	// Convert sprints to write format.
	logs := make([]*ticket_svc_history.LogItem, len(*history))

	for k, v := range *history {
		logs[k] = common.ToProto(&v)
	}

	resp.Logs = logs

	return resp, nil
}

func (h *TicketHistorySvc) GetByTicket(_ context.Context, req *ticket_svc_history.LogTicket) (*ticket_svc_history.LogsResponse, error) {
	history := &[]common.TicketHistory{}
	resp := &ticket_svc_history.LogsResponse{}

	// Find all sprints that have finished.
	if err := h.Service.GetDb().Where("project_code = ? AND ticket_id = ?", req.ProjectCode, req.TicketId).Find(history).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No logs"}

		return resp, nil
	}

	// Convert sprints to write format.
	logs := make([]*ticket_svc_history.LogItem, len(*history))

	for k, v := range *history {
		logs[k] = common.ToProto(&v)
	}

	resp.Logs = logs

	return resp, nil
}

func (h TicketHistorySvc) Log(_ context.Context, req *ticket_svc_history.LogItem) (*ticket_svc_history.LogResponse, error) {
	resp := &ticket_svc_history.LogResponse{}
	item := common.FromProto(req)

	// Create
	if err := h.Service.GetDb().Create(item).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to create log"}

		return resp, nil
	}

	// Convert to wire format
	resp.Log = common.ToProto(item)

	return resp, nil
}

func main() {
	svc := service.CreateService(ticket_svc_history.PackageName)

	ticket_svc_history.RegisterHistoryHandler(&svc, &TicketHistorySvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		// Migrate history models.
		svc.GetDb().LogMode(true)
		svc.GetDb().AutoMigrate(&common.TicketHistory{})
	})
}
