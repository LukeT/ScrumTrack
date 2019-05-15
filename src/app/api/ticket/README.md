# Ticket Service _ticket.api.ticket_
Find create, update and comment on tickets.

## Routes
### `POST` /:projectId
Creates a new ticket.

### `GET` /:projectId/categories
Fetches all categories used by existing tickets.

### `GET` /:projectId/:ticketId
Fetches a single ticket by it's ID.

### `PATCH` /:projectId/:ticketId
Updates a pre-existing ticket by it's ID

### `POST` /:projectId/:ticketId/move
Move a ticket between destinations and order.

### `GET` /:projectId/find/:type
Find all tickets within a type

### `GET` /:projectId/find/:type/:sprintId
Find all tickets within a given sprint.

### `GET` /:projectId/:ticketId/comments
Fetch all comments attached to a ticket

### `POST` /:projectId/:ticketId/comments
Create a new comment on a ticket.

### `GET` /:projectId/:ticketId/history
Returns all the history for this ticket.

### `GET` /:projectId//history/:sprintId
Returns all history for a given sprint
