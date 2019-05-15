package api

import (
	"encoding/json"
	"strings"
)

type HandlerFn func(req Request, resp *Response) interface{}
type Method string

const (
	GET    Method = "get"
	POST   Method = "post"
	PATCH  Method = "patch"
	DELETE Method = "delete"
)

type Handler struct {
	Method   Method
	Path     string
	Function HandlerFn
}

// Execute an API Handler.
func (request *Handler) Execute(req Request) (resp Response) {
	// Make response holder
	res := makeResponse()

	// Our response is now the new response
	resp = res

	// Defer until function end, catching errors if we can.
	defer func() {
		if r := recover(); r != nil {
			resp.Status = 500
			resp.Error = "An internal error occurred"

			req.Service.GetLog().Errorf("Handler %s %s thrown: %s", strings.ToUpper(string(request.Method)), request.Path, r)
		}
	}()

	// Execute the api function
	fnResponse := request.Function(req, &res)

	// Encode the response
	if resp, err := json.Marshal(fnResponse); err != nil {
		// If we can't encode the user response, throw everything away.
		res = makeResponse()
		res.Status = 500
		res.Body = "An internal error occurred while decoding payload"
		res.RawError = err
	} else {
		res.Body = string(resp)
	}

	// If we're a 4xx or 5xx class error, prefer Error over Body.
	if res.Status >= 400 {
		res.Error = res.Body
		res.Body = ""
	}

	return res
}

func MakeHandler(method Method, path string, fn HandlerFn) Handler {
	return Handler{Method: method, Path: path, Function: fn}
}
