package errors

import (
	"app/common/service/api"
	"fmt"
	"gopkg.in/go-playground/validator.v9"
	"net/http"
	"strings"
)

// Handle an Internal Error (500)
func HttpInternalError(resp *api.Response, err error) string {
	resp.Status = http.StatusInternalServerError
	resp.RawError = err

	fmt.Println(err)

	return "An internal error occurred"
}

// Handle invalid permissions (403)
func HttpUnauthorized(resp *api.Response) string {
	resp.Status = http.StatusForbidden

	return HttpUnauthorizedMsg(resp, "You do not have permission to access this resource")
}

// Handle generic authorisation error (403)
func HttpUnauthorizedMsg(resp *api.Response, msg string) string {
	resp.Status = http.StatusForbidden

	return msg
}

// Handle a resource not being found (404)
func HttpNotFound(resp *api.Response, message string) string {
	resp.Status = http.StatusNotFound

	return message
}

// Handle a validation error (400)
func HttpValidationError(resp *api.Response, message string) string {
	resp.Status = http.StatusBadRequest

	return message
}

// Handle a payload validation error (400)
func HttpPayloadValidationError(resp *api.Response, err error) string {
	resp.Status = http.StatusBadRequest

	if er, ok := err.(validator.ValidationErrors); ok {
		return fmt.Sprintf("Invalid field %s due to invalid validation %s", strings.ToLower(er[0].Field()), er[0].Tag())
	}

	return "Validation failed"
}
