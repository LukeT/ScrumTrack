package routes

import (
	"app/common/service/api"
	"app/services/mail/proto"
	"app/services/user/proto"
	"context"
	"fmt"
	"github.com/google/uuid"
	"strconv"
)

type ForgotPayload struct {
	*api.RequestPayload
	Email string `json:"email"`
}

func Forgot(req api.Request, _ *api.Response) interface{} {
	userClient := ticket_svc_user.GetUserClient(req.Service)
	mailClient := ticket_svc_mail.GetMailClient(req.Service)
	payload := req.Decode(&ForgotPayload{}).(*ForgotPayload)

	// Get a user by their email
	a, err := userClient.GetByEmail(context.Background(), &ticket_svc_user.Email{Email: payload.Email})

	if err != nil {
		return false
	}

	// Generate a random token for password reset
	a.ResetToken = uuid.New().String()

	// Update the user
	_, updErr := userClient.Update(context.Background(), a)

	if updErr != nil {
		return false
	}

	// Send an email
	vars := make(map[string]string)
	vars["name"] = a.FirstName
	vars["url"] = fmt.Sprintf("%s/reset/%d/%s", req.Service.GetUI(), a.Id, a.ResetToken)
	vars["id"] = strconv.Itoa(int(a.Id))

	env, err := mailClient.Post(context.Background(), &ticket_svc_mail.Envelope{
		To:        a.Email,
		Name:      a.FirstName + " " + a.LastName,
		Template:  "d-17f150fa815e466b9b49d76f82493516",
		Variables: vars,
	})

	if err != nil || !env.Sent {
		return false
	}

	return true
}
