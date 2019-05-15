package main

import (
	"app/api/ticket/routes"
	"app/api/ticket/routes/history"
	"app/api/ticket/routes/comments"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.ticket")

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/categories", middleware.ValidProject(routes.Categories)))

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/find/:type", middleware.IsAuthenticated(middleware.ValidProject(routes.All))))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/find/:type/:sprintId", middleware.IsAuthenticated(middleware.ValidProject(routes.All))))

	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId", middleware.IsAuthenticated(middleware.ValidProject(routes.Create))))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/:ticketId", middleware.IsAuthenticated(middleware.ValidProject(routes.Get))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/:ticketId/move", middleware.IsAuthenticated(middleware.ValidProject(routes.Move))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/:ticketId/move-sprint", middleware.IsAuthenticated(middleware.ValidProject(routes.MoveSprint))))
	svc.RegisterRoute(api.MakeHandler(api.PATCH, "/:projectId/:ticketId", middleware.IsAuthenticated(middleware.ValidProject(routes.Update))))

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/:ticketId/comments", middleware.IsAuthenticated(middleware.ValidProject(comments.All))))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/:projectId/:ticketId/comments", middleware.IsAuthenticated(middleware.ValidProject(comments.Create))))

	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/:ticketId/history", middleware.IsAuthenticated(middleware.ValidProject(history.All))))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId/history/:sprintId", middleware.IsAuthenticated(middleware.ValidProject(history.Sprint))))

	svc.Run()
}
