package api

import (
	"app/common/service/interfaces"
	"app/router/proto"
	"app/services/project/proto"
	"encoding/json"
)

type Payload interface {
	Valid() bool
	markInvalid()
}

type RequestPayload struct {
	valid bool
}

func (p *RequestPayload) Valid() bool {
	return p.valid
}

func (p *RequestPayload) markInvalid() {
	p.valid = false
}

type Request struct {
	Raw         *ticket_router.Request
	Service     interfaces.Svc
	CurrentUser int32
	URLParams   map[string]string
	QueryParams map[string]string
	Payload     map[string]string
	Decode      func(payload Payload) Payload

	Project *ticket_svc_project.Project
}

func MakeRequest(svc interfaces.Svc, raw *ticket_router.Request, urlParams map[string]string) Request {
	return Request{
		Raw:         raw,
		Service:     svc,
		URLParams:   urlParams,
		QueryParams: raw.Params,
		Decode: func(i Payload) Payload {
			err := json.Unmarshal([]byte(raw.Body), i)

			if err != nil {
				i.markInvalid()
			}

			return i
		},
	}
}
