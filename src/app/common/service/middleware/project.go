package middleware

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/project/proto"
	"context"
)

// Ensure the URL contains a valid project
func ValidProject(fn api.HandlerFn) api.HandlerFn {
	return func(req api.Request, res *api.Response) interface{} {
		client := ticket_svc_project.NewProjectsClient(req.Service.FindService(ticket_svc_project.PackageName))

		// Check the URL param exists
		if val, ok := req.URLParams["projectId"]; ok {
			// Call to projects
			Project, err := client.Get(context.Background(), &ticket_svc_project.Shortcode{Shortcode: val})

			// We found the project
			if err == nil && Project.Error == nil {
				req.Project = Project.Project

				return fn(req, res)
			} else if err != nil {
				return errors.HttpInternalError(res, err)
			}
		}

		return errors.HttpNotFound(res, "Project not found")
	}
}
