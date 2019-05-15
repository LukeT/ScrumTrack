package main

import (
	"app/api/admin/workflow/routes"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.admin.workflow")

	svc.RegisterRoute(api.MakeHandler(api.POST, "/", middleware.IsAuthenticatedAs(routes.Create, "admin")))
	svc.RegisterRoute(api.MakeHandler(api.PATCH, "/:id", middleware.IsAuthenticatedAs(routes.Update, "admin")))
	svc.RegisterRoute(api.MakeHandler(api.DELETE, "/:id", middleware.IsAuthenticatedAs(routes.Delete, "admin")))

	svc.Run()
}
