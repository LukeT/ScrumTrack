package main

import (
	"encoding/json"
	"net/http"
)

type RouteResponse struct {
	Status int         `json:"statusCode"`
	Origin string      `json:"source"`
	Body   interface{} `json:"data,omitempty"`
	Error  interface{} `json:"error,omitempty"`
}

// Setup CORS and JSON response headers for a given ResponseWriter
func SetupAPIHeaders(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, PATCH, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	w.Header().Set("Content-Type", "application/json")
}

func SendAPIError(error string, code int, name string, w http.ResponseWriter) {
	SendAPIResponse(&RouteResponse{
		Status: code,
		Origin: name,
		Error:  error,
	}, w)
}

func SendAPIResponse(response *RouteResponse, w http.ResponseWriter) {
	w.WriteHeader(response.Status)
	ress, _ := json.Marshal(response)
	w.Write(ress)
}
