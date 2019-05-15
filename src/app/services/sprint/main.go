package main

import (
	"app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/sprint/common"
	"app/services/sprint/proto"
	"context"
	"github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"time"
)

type SprintSvc struct {
	Service interfaces.Svc
}

func (p SprintSvc) GetActiveSprint(_ context.Context, req *ticket_svc_sprint.SprintByProject) (*ticket_svc_sprint.SprintResponse, error) {
	sprint := &common.Sprint{}
	resp := &ticket_svc_sprint.SprintResponse{}

	// Find the active sprint
	if err := p.Service.GetDb().Where("project_code = ? AND end_at IS NULL", req.ProjectId).Or("project_code = ? AND end_at > ?", req.ProjectId, time.Now()).First(sprint).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No active sprints"}

		return resp, nil
	}

	// Convert it to wire format
	resp.Sprint = common.ToProto(sprint)

	return resp, nil
}

func (p SprintSvc) GetHistoricSprints(_ context.Context, req *ticket_svc_sprint.SprintByProject) (*ticket_svc_sprint.SprintsResponse, error) {
	sprint := &[]common.Sprint{}
	resp := &ticket_svc_sprint.SprintsResponse{}

	// Find all sprints that have finished.
	if err := p.Service.GetDb().Where("project_code = ? AND end_at < ?", req.ProjectId, time.Now()).Find(sprint).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No sprints have ran"}

		return resp, nil
	}

	// Convert sprints to write format.
	sprints := make([]*ticket_svc_sprint.Sprint, len(*sprint))

	for k, v := range *sprint {
		sprints[k] = common.ToProto(&v)
	}

	resp.Sprints = sprints

	return resp, nil
}

func (p SprintSvc) GetById(_ context.Context, req *ticket_svc_sprint.SprintById) (*ticket_svc_sprint.SprintResponse, error) {
	sprint := &common.Sprint{}
	resp := &ticket_svc_sprint.SprintResponse{}

	// Find a single sprint
	if err := p.Service.GetDb().Where("id = ?", req.Id).First(sprint).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Sprint not found"}

		return resp, nil
	}

	// Convert to wire format.
	resp.Sprint = common.ToProto(sprint)

	return resp, nil
}

func (t SprintSvc) Create(_ context.Context, req *ticket_svc_sprint.Sprint) (*ticket_svc_sprint.SprintResponse, error) {
	resp := &ticket_svc_sprint.SprintResponse{}
	create := &common.Sprint{Name: req.Name, Duration: req.Duration, ProjectCode: req.ProjectCode}

	// Create the new sprint
	if err := t.Service.GetDb().Create(&create).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to create sprint"}

		return resp, nil
	}

	// Convert to wire
	resp.Sprint = common.ToProto(create)

	return resp, nil
}

func (p SprintSvc) Update(_ context.Context, req *ticket_svc_sprint.Sprint) (*ticket_svc_sprint.SprintResponse, error) {
	resp := &ticket_svc_sprint.SprintResponse{}

	// Find the existing sprint
	query := p.Service.GetDb().Where("id = ?", req.Id)
	baseSprint := &common.Sprint{}

	if err := query.First(baseSprint).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Sprint not found"}
		return resp, nil
	}

	// Update name
	baseSprint.Name = req.Name

	// Update startedAt if possible
	if req.StartedAt != 0 {
		baseSprint.StartedAt = mysql.NullTime{Time: time.Unix(req.StartedAt, 0), Valid: true}
	}

	// Update endAt if possible
	if req.EndAt != 0 {
		baseSprint.EndAt = mysql.NullTime{Time: time.Unix(req.EndAt, 0), Valid: true}
	}

	// Update the sprint
	if err := p.Service.GetDb().Save(baseSprint).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to update sprint"}

		return resp, nil
	}

	// Convert to wire format.
	resp.Sprint = common.ToProto(baseSprint)

	return resp, nil
}

func (p *SprintSvc) GetComments(_ context.Context, req *ticket_svc_sprint.SprintIdAndProject) (*ticket_svc_sprint.SprintCommentsResponse, error) {
	comments := &[]common.SprintComment{}
	resp := &ticket_svc_sprint.SprintCommentsResponse{}

	// Find all sprints that have finished.
	if err := p.Service.GetDb().Where("project_code = ? AND sprint_id = ?", req.Project, req.SprintId).Find(comments).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No comments found"}

		return resp, nil
	}

	// Convert sprints to write format.
	sprints := make([]*ticket_svc_sprint.SprintComment, len(*comments))

	for k, v := range *comments {
		sprints[k] = common.CommentToProto(&v)
	}

	resp.Comments = sprints

	return resp, nil
}

func (p SprintSvc) PastComments(_ context.Context, req *ticket_svc_sprint.SprintIdAndProject) (*ticket_svc_sprint.SprintCommentsResponse, error) {
	comments := &[]common.SprintComment{}
	resp := &ticket_svc_sprint.SprintCommentsResponse{}

	// Find all sprints that have finished.
	if err := p.Service.GetDb().Where("project_code = ? AND sprint_id < ?", req.Project, req.SprintId).Find(comments).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "No comments found"}

		return resp, nil
	}

	// Convert sprints to write format.
	sprints := make([]*ticket_svc_sprint.SprintComment, len(*comments))

	for k, v := range *comments {
		sprints[k] = common.CommentToProto(&v)
	}

	resp.Comments = sprints

	return resp, nil
}

func (p SprintSvc) AddComment(_ context.Context, req *ticket_svc_sprint.SprintComment) (*ticket_svc_sprint.SprintCommentResponse, error) {
	resp := &ticket_svc_sprint.SprintCommentResponse{}
	create := common.CommentFromProto(req)

	// Create the new sprint
	if err := p.Service.GetDb().Create(&create).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to create comment"}

		return resp, nil
	}

	// Convert to wire
	resp.Comment = common.CommentToProto(create)

	return resp, nil
}

func (p *SprintSvc) DeleteComment(_ context.Context, req *ticket_svc_sprint.SprintCommentId) (*ticket_common.Status, error) {
	// Delete based on ID
	if err := p.Service.GetDb().Where("id = ? AND project_code = ?", req.Id, req.Project).Delete(&common.SprintComment{}).Error; err != nil {
		return &ticket_common.Status{Status: false}, nil
	}

	return &ticket_common.Status{Status: true}, nil
}

func (p SprintSvc) ResolveComment(_ context.Context, req *ticket_svc_sprint.SprintCommentIdWithSprint) (*ticket_common.Status, error) {
	comment := &common.SprintComment{}

	// Find a single sprint comment
	if err := p.Service.GetDb().Where("id = ?", req.Id).First(comment).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		return &ticket_common.Status{Status: false}, nil
	}

	comment.ResolvedId = uint(req.SprintId)

	p.Service.GetDb().Save(comment)

	return &ticket_common.Status{Status: true}, nil
}

func main() {
	svc := service.CreateService(ticket_svc_sprint.PackageName)

	ticket_svc_sprint.RegisterSprintsHandler(&svc, &SprintSvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		// Sync database models
		svc.GetDb().LogMode(true)
		svc.GetDb().AutoMigrate(&common.Sprint{})
		svc.GetDb().AutoMigrate(&common.SprintComment{})
	})
}
