package main

import (
	"app/api/sprint/routes"
	"app/api/sprint/routes/comments"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.sprint")

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/active", middleware.IsAuthenticated(middleware.ValidProject(routes.Active))))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/history", middleware.IsAuthenticated(middleware.ValidProject(routes.History))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/active/start", middleware.IsAuthenticatedAs(middleware.ValidProject(routes.Start), "admin")))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/active/stop", middleware.IsAuthenticatedAs(middleware.ValidProject(routes.Stop), "admin")))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId", middleware.IsAuthenticatedAs(middleware.ValidProject(routes.Create), "admin")))

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/:sprintId/comments", middleware.IsAuthenticated(middleware.ValidProject(comments.All))))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/:sprintId/comments/past", middleware.IsAuthenticated(middleware.ValidProject(comments.Past))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/:sprintId/comments", middleware.IsAuthenticated(middleware.ValidProject(comments.Create))))

	svc.RegisterRoute(api.MakeHandler(api.DELETE, "/:projectId/:sprintId/comments/:id", middleware.IsAuthenticated(middleware.ValidProject(comments.Delete))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/:sprintId/comments/:id/resolve", middleware.IsAuthenticated(middleware.ValidProject(comments.Resolve))))

	svc.Run()
}
