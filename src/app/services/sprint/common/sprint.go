package common

import (
	"github.com/go-sql-driver/mysql"
)

type Sprint struct {
	Id        uint `gorm:"primary_key"`
	StartedAt mysql.NullTime
	EndAt     mysql.NullTime

	Name        string
	Duration    int32
	ProjectCode string
}
