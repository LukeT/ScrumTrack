package common

import (
	"app/common/helpers"
	"app/common/service/interfaces"
	"time"
)

type TicketHistory struct {
	Id          int32 `gorm:"primary_key"`

	ProjectCode string
	TicketId int32
	SprintId     interfaces.NullInt32 // optional sprint id
	Type helpers.LogType         `sql:"type:ENUM('sprint', 'title', 'assignee', 'weight', 'location', 'status', 'reprioritised'); not null"`
	Old string
	New string
	Internal bool `gorm:"default:0"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
}
