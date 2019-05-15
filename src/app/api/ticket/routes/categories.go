package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/ticket/proto"
	"context"
)

func Categories(req api.Request, res *api.Response) interface{} {
	userClient := ticket_svc_ticket.GetTicketsClient(req.Service)

	// Fetch the categories
	categories, err := userClient.GetCategories(context.Background(), &ticket_svc_ticket.GetAllRequest{ProjectSC: req.Project.Shortcode })

	if err != nil {
		return errors.HttpInternalError(res, err)
	}

	return categories.Categories
}
