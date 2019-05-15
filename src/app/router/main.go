package main

import (
	"app/common/service"
	"app/common/service/interfaces"
	cache2 "app/router/cache"
	"app/router/proto"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Start the HTTP server
func listen(svc interfaces.Svc) {
	if err := http.ListenAndServe("0.0.0.0:8080", nil); err != nil {
		svc.GetLog().Fatal(err)
	}
}

func main() {
	svc := service.CreateService("ticket.router")
	cache := cache2.InitRouterCache(svc.Agent)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Handle CORS headers
		SetupAPIHeaders(w)

		// Ignore any OPTIONS headers (CORS)
		if r.Method == "OPTIONS" {
			return
		}

		// Handle not being able to find a valid service.
		item, route, err := cache.Find(r.URL.Path)
		if err != nil {
			SendAPIError(
				"No such route",
				http.StatusNotFound,
				svc.Name,
				w,
			)

			return
		}

		// Connect to the API service.
		rpc := svc.ConnectTo(item)
		client := ticket_router.NewRouterClient(rpc)

		header := make(map[string]string, 0)

		// Store Request headers
		for a, b := range r.Header {
			header[a] = b[0]
		}

		body, err := ioutil.ReadAll(r.Body)

		if err != nil {
			SendAPIError(
				"Invalid Payload",
				http.StatusBadRequest,
				item.Name,
				w,
			)

			return
		}

		// Store query parameters
		query := make(map[string]string)

		for k, v := range r.URL.Query() {
			query[k] = v[0]
		}

		// Request to API service
		a, err := client.Call(context.Background(), &ticket_router.Request{
			Method:  r.Method,
			Path:    "/" + route,
			Headers: header,
			Params:  query,
			Body:    string(body),
		})

		// API threw unexpected error
		if err != nil {
			fmt.Println(err)
			SendAPIError(
				"An internal routing error occurred",
				http.StatusInternalServerError,
				item.Name,
				w,
			)

			return
		} else {
			// Log the error
			fmt.Println(a)

			// Build response
			resp := &RouteResponse{
				Status: int(a.Status),
				Origin: item.Name,
			}

			// Set HTTP Errors
			for k, v := range a.Headers {
				w.Header().Set(k, v)
			}

			// Unmarshal payloads
			if resp.Status >= 400 {
				resp.Body = nil
				json.Unmarshal([]byte(a.Error), &resp.Error)
			} else {
				resp.Error = nil
				json.Unmarshal([]byte(a.Body), &resp.Body)
			}

			SendAPIResponse(resp, w)
		}

		defer rpc.Close()
	})

	// Start the service.
	svc.Run(func(svc interfaces.Svc) {
		go listen(svc)
	})
}
