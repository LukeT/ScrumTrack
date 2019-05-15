package common

import (
	"time"
)

type TicketComment struct {
	Id int32 `gorm:"primary_key"`

	ProjectCode string
	TicketId    uint

	Body string

	UserId int32

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
}
