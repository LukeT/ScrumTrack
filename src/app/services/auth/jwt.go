package main

import (
	"app/services/auth/proto"
	"errors"
	"time"
)
import "github.com/dgrijalva/jwt-go"

type TokenClaim struct {
	*jwt.StandardClaims
	Session *ticket_svc_auth.SessionState
}

var SECRET = "secret"

// Generate a JWt token
func Generate(user *ticket_svc_auth.SessionState) (string, error) {
	expiry := time.Now().Add(time.Hour * 24 * 30).Unix()
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims = &TokenClaim{
		&jwt.StandardClaims{
			ExpiresAt: expiry,
		},
		user,
	}

	tokenStr, err := token.SignedString([]byte(SECRET))

	if err != nil {
		return "", err
	}

	return tokenStr, nil
}

// Validate a JWT is valid
func Validate(token string) (*ticket_svc_auth.SessionState, error) {
	jwt, err := jwt.ParseWithClaims(token, &TokenClaim{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid type")
		}

		return []byte(SECRET), nil
	})

	if err != nil {
		return &ticket_svc_auth.SessionState{}, err
	}

	claims, ok := jwt.Claims.(*TokenClaim)

	if ok && jwt.Valid {
		return claims.Session, nil
	}

	return &ticket_svc_auth.SessionState{}, err
}
