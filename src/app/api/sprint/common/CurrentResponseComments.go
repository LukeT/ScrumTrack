package common

import (
	"app/services/sprint/proto"
)

type CurrentResponseComments struct {
	Id                   int32 `json:"id"`
	AuthorId             int32 `json:"authorId"`
	ProjectCode          string `json:"projectCode"`
	Type                 string `json:"type"`
	Message              string`json:"message"`
	CreatedAt            int64`json:"createdAt"`
	SprintId             int32 `json:"sprintId"`
	ResolvedId           *int32 `json:"resolvedId"`
}

func MakeCurrentResponseComment(user *ticket_svc_sprint.SprintComment) *CurrentResponseComments {
	resp := &CurrentResponseComments{}

	resp.Id = user.Id
	resp.AuthorId = user.AuthorId
	resp.ProjectCode = user.ProjectCode
	resp.Type = user.Type
	resp.Message = user.Message
	resp.CreatedAt = user.CreatedAt
	resp.SprintId = user.SprintId

	if user.ResolvedId != 0 {
		resp.ResolvedId = &user.ResolvedId
	}

	return resp
}

func MakeCurrentResponseCommentMult(user []*ticket_svc_sprint.SprintComment) *[]*CurrentResponseComments {
	newRes := make([]*CurrentResponseComments, len(user))

	for k, v := range user {
		newRes[k] = MakeCurrentResponseComment(v)
	}

	return &newRes
}
