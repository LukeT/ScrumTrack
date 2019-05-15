# User Admin Service _ticket.api.admin.user_
Handles administrative actions on user accounts.

## Routes
### `GET` /
Returns a list of users that have been created with more detail than the non-administrative endpoint

### `POST` /
Creates a new user.

### `PATCH` /:userId
Modifies a user by their userId

### `DELETE` /:userId
Deletes a user by their userId
