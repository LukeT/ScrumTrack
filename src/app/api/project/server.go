package main

import (
	"app/api/project/routes"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.project")

	svc.RegisterRoute(api.MakeHandler(api.GET, "/", middleware.IsAuthenticated(routes.All)))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/:projectId", middleware.IsAuthenticated(middleware.ValidProject(routes.Get))))

	svc.Run()
}
