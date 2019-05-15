all:
	@echo "\033[1mRouter:\033[0m"
	@echo "api.router"
	@echo ""
	@echo "\033[1mAPI Services:\033[0m"
	@echo "api.auth api.user api.ticket api.workflow"
	@echo ""
	@echo "\033[1mServices:\033[0m"
	@echo "svc.auth svc.user svc.mail svc.project svc.ticket svc.workflow"
	@echo ""

consul:
	consul agent -dev -ui

api.router:
	go run router/*.go

api.auth:
	go run api/auth/*.go

api.user:
	go run api/user/*.go

api.project:
	go run api/project/*.go

api.workflow:
	go run api/workflow/*.go

api.sprint:
	go run api/sprint/*.go

api.admin.workflow:
	go run api/admin/workflow/*.go

api.admin.user:
	go run api/admin/user/*.go

api.ticket:
	go run api/ticket/*.go

svc.auth:
	go run services/auth/*.go

svc.user:
	go run services/user/*.go

svc.mail:
	go run services/mail/*.go

svc.project:
	go run services/project/*.go

svc.ticket:
	go run services/ticket/*.go

svc.workflow:
	go run services/workflow/*.go

svc.sprint:
	go run services/sprint/*.go

svc.history:
	go run services/history/*.go
