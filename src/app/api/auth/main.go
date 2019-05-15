package main

import (
	"app/api/auth/routes"
	"app/common/service"
	"app/common/service/api"
)

func main() {
	svc := service.CreateService("ticket.api.auth")

	svc.RegisterRoute(api.MakeHandler(api.POST, "/login", routes.Login))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/forgot", routes.Forgot))
	svc.RegisterRoute(api.MakeHandler(api.POST, "/reset/:id/:token", routes.Reset))

	svc.Run()
}
