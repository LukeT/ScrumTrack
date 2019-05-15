# Sprint Service _ticket.api.sprint_
Handles fetching of available projects

## Routes

### `POST` /:projectId
Creates a new sprint

### `GET` /:projectId/active
Returns the currently active sprint. It will 404 if no sprint is active.

### `POST` /:projectId/active/start
Starts a sprint to make it active.

### `POST` /:projectId/active/stop
Stops a sprint to make it inactive.

### `GET` /:projectId/history
Returns all previous sprints.


### `GET` /:projectId/:sprintId/comments/past
Gets all the comments made before a sprint

### `GET` /:projectId/:sprintId/comments
Gets all the comments posted on a sprint

### `POST` /:projectId/:sprintId/comments
Creates a new comment on a sprint

### `DELETE` /:projectId/:sprintId/comments/:id
Deletes a comment on a sprint

### `POST` /:projectId/:sprintId/comments/:id/resolve
Marks a comment as resolved on a sprint
