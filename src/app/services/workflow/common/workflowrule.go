package common

import (
	"app/common/helpers"
	"time"
)

type WorkflowRule struct {
	Id        uint `gorm:"primary_key"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`

	Name     string
	MaxItems uint
	Order    uint
	Status helpers.TicketStatus         `sql:"type:ENUM('open', 'in-progress', 'closed'); not null"`
	Allowed  []*WorkflowRule `gorm:"many2many:workflow_deps;association_jointable_foreignkey:destination_workflow"`
}
