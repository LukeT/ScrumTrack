package main

import (
	"app/api/workflow/routes"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.workflow")

	svc.RegisterRoute(api.MakeHandler(api.GET, "/", middleware.IsAuthenticated(routes.Get)))

	svc.Run()
}
