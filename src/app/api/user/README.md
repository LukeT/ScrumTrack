# User Service _ticket.api.user_
Handles actions related to user accounts

## Routes
### `GET` /
Fetches minimal information on all of the users available.

### `GET` /current
Fetches the currently active and authenticated user.

### `PATCH` /current
Updates account information for the current user

### `POST` /current/password
Updates the password on the current users account.
