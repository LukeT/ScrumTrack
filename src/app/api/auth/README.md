# Auth Service _ticket.api.auth_
Handles authentication related actions

## Routes
### `POST` /login
Enables the user to login, issuing an api key for future requests.

### `POST` /forgot
Requests a password reset email for a given user

### `POST` /reset/:userId/:secret
Changes the password using a token emailed to the user
