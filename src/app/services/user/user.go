package main

import "time"

type User struct {
	Id        uint `gorm:"primary_key"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`

	Username string
	Email    string
	Password string
	Role     string

	FirstName string
	LastName  string

	ResetToken string

	Active   bool
	Disabled bool
}
