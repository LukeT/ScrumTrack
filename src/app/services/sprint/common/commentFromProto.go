package common

import (
	"app/services/sprint/proto"
	"github.com/jinzhu/copier"
)

// Convert a sprint from the ORM into protocol format.
func CommentFromProto(sprint *ticket_svc_sprint.SprintComment) *SprintComment {
	trans := &SprintComment{}

	copier.Copy(trans, sprint)

	return trans
}
