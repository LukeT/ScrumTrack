package common

import (
	"app/services/sprint/proto"
)

type CurrentResponse struct {
	Id        int32  `json:"id"`
	Name      string `json:"name"`
	Duration  int32  `json:"duration"`
	StartedAt *int64 `json:"startAt"`
	EndAt     *int64 `json:"endAt"`
}

func MakeCurrentResponse(user *ticket_svc_sprint.Sprint) *CurrentResponse {
	resp := &CurrentResponse{}

	resp.Id = user.Id
	resp.Name = user.Name
	resp.Duration = user.Duration

	resp.EndAt = nil
	resp.StartedAt = nil

	if user.StartedAt != 0 && user.EndAt != 0 {
		resp.StartedAt = &user.StartedAt
		resp.EndAt = &user.EndAt
	}

	return resp
}

func MakeCurrentResponseMult(user []*ticket_svc_sprint.Sprint) *[]*CurrentResponse {
	newRes := make([]*CurrentResponse, len(user))

	for k, v := range user {
		newRes[k] = MakeCurrentResponse(v)
	}

	return &newRes
}
