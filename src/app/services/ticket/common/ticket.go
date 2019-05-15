package common

import (
	"app/common/helpers"
	"app/common/service/interfaces"
	"github.com/jinzhu/gorm"
	"time"
)

type LocationType string

const (
	Sprint  LocationType = "sprint"
	Backlog LocationType = "backlog"
	Pending LocationType = "pending"
)

type Ticket struct {
	Id          int32 `gorm:"primary_key"`
	ProjectCode string

	Title  string `sql:"type:text;"`
	Body   string `sql:"type:text;"`
	Weight int32

	LocationType LocationType         `sql:"type:ENUM('sprint', 'backlog', 'pending'); not null"`
	SprintId     interfaces.NullInt32 // optional sprint id
	Status helpers.TicketStatus         `sql:"type:ENUM('open', 'in-progress', 'closed'); not null"`

	PreviousTicket interfaces.NullInt32 // order in LocationType

	WorkflowId       int32
	WorkflowPosition int32

	CreatorUserId  int32
	AssigneeUserId int32

	Comments []TicketComment

	Category string

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
}

func (u *Ticket) BeforeUpdate(tx *gorm.DB) (err error) {

	return
}

func (u *Ticket) AfterUpdate(tx *gorm.DB) (err error) {

	return
}
