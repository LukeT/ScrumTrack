package routes

import (
	"app/common/errors"
	"app/common/service/api"
	"app/services/sprint/proto"
	"context"
	"gopkg.in/go-playground/validator.v9"
)

type CreateTicketPayload struct {
	*api.RequestPayload
	Goal     string `json:"goal" validate:"required"`
	Duration int32  `json:"duration" validate:"required"`
}

func Create(req api.Request, res *api.Response) interface{} {
	// Parse payload
	payload := &CreateTicketPayload{}
	validate := validator.New()
	req.Decode(payload)
	err := validate.Struct(payload)

	// Handle validation errors
	if err != nil {
		return errors.HttpPayloadValidationError(res, err)
	}

	sprintSvc := ticket_svc_sprint.GetSprintsClient(req.Service)

	// Create a new sprint
	sprint, err := sprintSvc.Create(context.Background(), &ticket_svc_sprint.Sprint{
		Name:        payload.Goal,
		Duration:    payload.Duration,
		ProjectCode: req.Project.Shortcode,
	})

	if err != nil || sprint.Error != nil {
		return errors.HttpInternalError(res, err)
	}

	// Return created sprint
	return sprint.Sprint
}
