package main

import (
	"app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/project/proto"
	"context"
	"github.com/jinzhu/copier"
	"github.com/jinzhu/gorm"
)

type ProjectSvc struct {
	Service interfaces.Svc
}

func (p *ProjectSvc) GetAll(ctx context.Context, _ *ticket_common.Empty) (*ticket_svc_project.ProjectsResponse, error) {
	projects := []Project{}
	resp := &ticket_svc_project.ProjectsResponse{}

	// Find all projects
	if err := p.Service.GetDb().Find(&projects).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to load projects"}

		return resp, nil
	}

	// Convert projects to protocol format
	resp.Project = make([]*ticket_svc_project.Project, len(projects))

	for k, v := range projects {
		authU := &ticket_svc_project.Project{}
		copier.Copy(authU, v)
		resp.Project[k] = authU
	}

	return resp, nil
}

func (p *ProjectSvc) Get(ctx context.Context, sc *ticket_svc_project.Shortcode) (*ticket_svc_project.ProjectResponse, error) {
	project := &Project{}
	resp := &ticket_svc_project.ProjectResponse{}

	// Find the shortcode
	if err := p.Service.GetDb().Where("shortcode = ?", sc.Shortcode).First(project).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Project not found"}

		return resp, nil
	}

	// Convert to protocol format.
	newProject := &ticket_svc_project.Project{}
	copier.Copy(newProject, project)
	resp.Project = newProject

	return resp, nil
}

func main() {
	svc := service.CreateService(ticket_svc_project.PackageName)

	ticket_svc_project.RegisterProjectsHandler(&svc, &ProjectSvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		// Migrate the DB table.
		svc.GetDb().AutoMigrate(&Project{})
	})
}
