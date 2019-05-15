package common

import (
	"app/services/sprint/proto"
	"github.com/jinzhu/copier"
)

// Convert a sprint from the ORM into protocol format.
func ToProto(sprint *Sprint) *ticket_svc_sprint.Sprint {
	trans := &ticket_svc_sprint.Sprint{}

	copier.Copy(trans, sprint)

	if sprint.StartedAt.Valid {
		trans.StartedAt = sprint.StartedAt.Time.Unix()
	}

	if sprint.EndAt.Valid {
		trans.EndAt = sprint.EndAt.Time.Unix()
	}

	return trans
}
