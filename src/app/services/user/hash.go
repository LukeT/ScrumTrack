package main

import (
	"golang.org/x/crypto/bcrypt"
)

// hash a users password
func HashPassword(pass string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(pass), 11)

	if err != nil {
		return "", err
	}

	return string(hash), nil
}

// Compare a hashed password to a plain text password
func ComparePassword(hash string, pass string) bool {
	passError := bcrypt.CompareHashAndPassword([]byte(hash), []byte(pass))

	return passError == nil
}
