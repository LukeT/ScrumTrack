package common

import (
	"app/services/user/proto"

	"github.com/jinzhu/copier"
)

type UserResponse struct {
	Id        int    `json:"id"`
	Username  string `json:"username"`
	Email     string `json:"email"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Role      string `json:"role"`
	Active    bool   `json:"active"`
	Disabled  bool   `json:"disabled"`
}

// Transform a user into a JSON-transferable format.
func MakeUserResponse(user *ticket_svc_user.AuthUser) *UserResponse {
	resp := &UserResponse{}

	copier.Copy(resp, user)

	return resp
}
