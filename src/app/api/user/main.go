package main

import (
	"app/api/user/routes"
	"app/common/service"
	"app/common/service/api"
	"app/common/service/middleware"
)

func main() {
	svc := service.CreateService("ticket.api.user")

	svc.RegisterRoute(api.MakeHandler(api.GET, "/", middleware.IsAuthenticated(routes.All)))
	svc.RegisterRoute(api.MakeHandler(api.GET, "/current", middleware.IsAuthenticated(routes.Current)))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/current/password", middleware.IsAuthenticated(routes.Password)))
	svc.RegisterRoute(api.MakeHandler(api.PATCH, "/current", middleware.IsAuthenticated(routes.Update)))

	svc.Run()
}
