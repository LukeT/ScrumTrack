# Application API
This is implemented as an array of go microservices.


## Running
Assuming you have golang installed, you need to install go's package manager:
```bash
go get github.com/golang/dep/cmd/dep
```

Once installed, package dependencies will need to be installed:
```bash
dep ensure
```

Once installed all services can be ran through make, see `make` for possible services to run. You will also need consul installed locally for services to find each other. 

**You can use the pre-configured docker-compose, which is completely setup for you. See the readme in the root directory.**

## Core
- Routing framework
- Service Discovery
- HTTP Framework

## Services

#### Routing Service
-  [ticket.router](./router/README.md)


#### API Service
###### Administrative API
-  [ticket.api.admin.user](./api/admin/user/README.md)
-  [ticket.api.admin.workflow](./api/admin/workflow/README.md)

###### Non-administrative API
-  [ticket.api.auth](./api/auth/README.md)
-  [ticket.api.project](./api/auth/README.md)
-  [ticket.api.sprint](./api/auth/README.md)
-  [ticket.api.ticket](./api/auth/README.md)
-  [ticket.api.user](./api/auth/README.md)
-  [ticket.api.workflow](./api/auth/README.md)

#### Core Services
-  [ticket.svc.auth](./services/auth/README.md)
-  [ticket.svc.mail](./services/mail/README.md)
-  [ticket.svc.project](./services/project/README.md)
-  [ticket.svc.sprint](./services/sprint/README.md)
-  [ticket.svc.ticket](./services/ticket/README.md)
-  [ticket.svc.user](./services/user/README.md)
-  [ticket.svc.workflow](./services/workflow/README.md)
-  [ticket.svc.history](./services/history/README.md)


## Underlying Framework

### Creating an API service
#### Middleware
###### IsAuthenticated()
IsAuthenticated can be chained when registering a route to ensure that the user is authenticated with the system and that the authorization header is valid.

###### IsAuthenticatedAs(role)
IsAuthenticatedAs can be chained when registering a route to ensure the user is assigned a specific role (e.g admin) and is also correctly authenticated with a valid token.

###### ValidProject()
Ensures a project is valid and exists. This assumes the URL somewhere contains a parameter of "projectId". A reference to the project is stored at `req.Project`


#### Response Helpers
Provided are several response helpers to consistently format errors. By default we assume everything
is a 200 OK. These should be used as the return of an API handler.

###### HttpInternalError(resp, err)
Throws a 500 error, logging out a generic message to the API but logs the underlying
error to the console.

###### HttpUnauthorized(resp)
Throws a generic unauthorised error (403), indicating the user has no permission for this resource.

###### HttpUnauthorizedMsg(resp, msg)
Throws a custom unauthorised error (403) with a given message.

###### HttpNotFound(resp, message string)
Throws a not found status code (404), with a custom message.

###### HttpValidationError(resp, msg)
Throws a 400, bad request with a custom message

###### HttpPayloadValidationError(resp, error)
Throws a validation error based on the validator.v9 package errors (400)

