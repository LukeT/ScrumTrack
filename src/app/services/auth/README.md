# Authentication Service _ticket.svc.auth_
The authentication service handles issuing, validating and revoking of authorisation tokens.

This uses an in-memory struct to store sessions. Rebooting this service will clear all previous issued sessions. This could be expanded to use a KV store (redis) to persist tokens (and support scaling).

It uses `jwt` to generate, sign and decode these tokens. JWT tokens enable us to provide a signed payload
reducing the need for database calls.

## Methods

### Auth.Create(SessionState) returns (Session);
Issues a new token based on state.

### Auth.Validate(Session) returns (SessionState);
Validates that a session token exists and is valid and returns information
about that token

### Auth.Destroy(Session) returns (Status);
Revokes and destroys a session token
