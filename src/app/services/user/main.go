package main

import (
	"app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/user/proto"
	"context"
	"errors"
	"github.com/jinzhu/copier"
	"github.com/jinzhu/gorm"
)

type UserSvc struct {
	Service interfaces.Svc
}

// Fetch a user by their id
func (t *UserSvc) GetById(ctx context.Context, by *ticket_svc_user.Id) (*ticket_svc_user.AuthUser, error) {
	user := User{}
	auth := ticket_svc_user.AuthUser{}

	// Fetch by ID
	if err := t.Service.GetDb().Where("id = ?", by.Id).First(&user).Error; gorm.IsRecordNotFoundError(err) {
		return &auth, errors.New("no such user")
	}

	// Copy to wire format
	copier.Copy(&auth, &user)

	return &auth, nil
}

func (t *UserSvc) GetByUsername(ctx context.Context, by *ticket_svc_user.Username) (*ticket_svc_user.AuthUser, error) {
	user := User{}
	auth := ticket_svc_user.AuthUser{}

	// Fetch by username
	if err := t.Service.GetDb().Where("username = ?", by.Username).First(&user).Error; gorm.IsRecordNotFoundError(err) {
		return &auth, errors.New("no such user")
	}

	// Convert to wire format
	copier.Copy(&auth, &user)

	return &auth, nil
}

func (t *UserSvc) GetByEmail(ctx context.Context, by *ticket_svc_user.Email) (*ticket_svc_user.AuthUser, error) {
	user := User{}
	auth := ticket_svc_user.AuthUser{}

	// Find a user by their email
	if err := t.Service.GetDb().Where("email = ?", by.Email).First(&user).Error; gorm.IsRecordNotFoundError(err) {
		return &auth, errors.New("no such user")
	}

	// Convert to wire format
	copier.Copy(&auth, &user)

	return &auth, nil
}

func (t *UserSvc) GetAll(ctx context.Context, by *ticket_common.Empty) (*ticket_svc_user.UserList, error) {
	user := []User{}
	auth := ticket_svc_user.UserList{}

	// Fetch all available users
	if err := t.Service.GetDb().Find(&user).Error; gorm.IsRecordNotFoundError(err) {
		return &auth, errors.New("no such user")
	}

	// Convert the users to wire format
	auth.Users = make([]*ticket_svc_user.AuthUser, len(user))

	for k, v := range user {
		authU := &ticket_svc_user.AuthUser{}
		copier.Copy(authU, v)
		auth.Users[k] = authU
	}

	return &auth, nil
}

func (t *UserSvc) Create(ctx context.Context, user *ticket_svc_user.AuthUser) (*ticket_svc_user.Id, error) {
	acc := &User{}
	copier.Copy(acc, &user)

	// Hash the users password
	hash, err := HashPassword(user.Password)
	if err != nil {
		return &ticket_svc_user.Id{}, errors.New("unable to create")
	}

	acc.Password = hash

	// Create the user
	if err := t.Service.GetDb().Create(&acc).Error; err != nil {
		return &ticket_svc_user.Id{}, errors.New("unable to create")
	}

	// Return the ID
	return &ticket_svc_user.Id{Id: int32(acc.Id)}, nil
}

func (t *UserSvc) Update(ctx context.Context, editUser *ticket_svc_user.AuthUser) (*ticket_svc_user.UserResponse, error) {
	resp := &ticket_svc_user.UserResponse{}
	user := User{}

	// Find the current user
	if err := t.Service.GetDb().Where("ID = ?", editUser.Id).First(&user).Error; gorm.IsRecordNotFoundError(err) {
		resp.Error.Error = "User not found"

		return resp, nil
	}

	// Check and update the email
	if user.Email != editUser.Email {
		_, err := t.GetByEmail(ctx, &ticket_svc_user.Email{Email: editUser.Email})

		if err == nil {
			resp.Error = &ticket_common.Error{Error: "Email already in use"}

			return resp, nil
		}
	}

	// Check and update the username
	if user.Username != editUser.Username {
		_, err := t.GetByUsername(ctx, &ticket_svc_user.Username{Username: editUser.Username})

		if err == nil {
			resp.Error = &ticket_common.Error{Error: "Username already in use"}

			return resp, nil
		}
	}

	// Check and update the password (rehashing)
	if editUser.Password != user.Password {
		hash, err := HashPassword(editUser.Password)

		// If an error occurred, clear the password
		if err != nil {
			editUser.Password = user.Password
		} else {
			editUser.Password = hash
		}
	}

	copier.Copy(&user, editUser)

	// Save the user changes
	if err := t.Service.GetDb().Save(&user).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to update user"}

		return resp, nil
	}

	resp.User = editUser

	return resp, nil
}

// Delete a user
func (t *UserSvc) Delete(ctx context.Context, id *ticket_svc_user.Id) (*ticket_common.VoidResponse, error) {
	// Delete based on ID
	if err := t.Service.GetDb().Where("id = ?", id.Id).Delete(&User{}).Error; err != nil {
		return &ticket_common.VoidResponse{}, errors.New("unable to destroy")
	}

	return &ticket_common.VoidResponse{}, nil
}

// Check whether passwords match
func (t *UserSvc) CheckPassword(ctx context.Context, password *ticket_svc_user.PasswordCheck) (*ticket_common.Status, error) {
	status := &ticket_common.Status{Status: false}
	user := &User{}

	// Fetch user from the database
	if err := t.Service.GetDb().Where("id = ?", password.UserId).First(&user).Error; err == nil {
		status.Status = ComparePassword(user.Password, password.Password)
	}

	return status, nil
}

func main() {
	svc := service.CreateService(ticket_svc_user.PackageName)

	ticket_svc_user.RegisterUserHandler(&svc, &UserSvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		svc.GetDb().AutoMigrate(&User{})
	})
}
