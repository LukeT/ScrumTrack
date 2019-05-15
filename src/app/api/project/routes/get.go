package routes

import (
	"app/common/service/api"
)

func Get(req api.Request, _ *api.Response) interface{} {
	// Return the current project (injected via middleware)
	return req.Project
}
