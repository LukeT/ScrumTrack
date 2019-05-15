package common

import (
	"app/services/sprint/proto"
	"github.com/jinzhu/copier"
)

// Convert a sprint from the ORM into protocol format.
func CommentToProto(sprint *SprintComment) *ticket_svc_sprint.SprintComment {
	trans := &ticket_svc_sprint.SprintComment{}

	copier.Copy(trans, sprint)

	trans.CreatedAt = sprint.CreatedAt.Unix()

	return trans
}
