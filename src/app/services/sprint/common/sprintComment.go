package common

import "time"

type SprintComment struct {
	Id        uint `gorm:"primary_key"`
	ProjectCode string
	Type                 string
	Message   string `sql:"type:text;"`

	CreatedAt time.Time
	AuthorId             int32

	SprintId             uint
	ResolvedId           uint
}
