package common

import (
	"app/services/user/proto"
	"crypto/md5"
	"fmt"
	"github.com/jinzhu/copier"
)

type CurrentResponse struct {
	Id        int    `json:"id"`
	Username  string `json:"username"`
	Email     string `json:"email,omitempty"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Role      string `json:"role,omitempty"`
	Avatar    string `json:"avatar"`
}

func MakeCurrentResponse(user *ticket_svc_user.AuthUser, private bool) *CurrentResponse {
	resp := &CurrentResponse{}

	copier.Copy(resp, user)

	if !private {
		resp.Email = ""
		resp.Role = ""
	}

	resp.Avatar = fmt.Sprintf("https://www.gravatar.com/avatar/%x", md5.Sum([]byte(user.Email)))

	return resp
}
