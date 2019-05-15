# Sprint Service _ticket.svc.sprint_
The sprint service is responsible for creation, listing and execution of sprints.

## Methods

### Sprint.GetActiveSprint(SprintByProject) returns (SprintResponse);
Fetches the active sprint for a project.

### Sprint.GetHistoricSprints(SprintByProject) returns (SprintsResponse);
Fetches all of the past sprints for a given project (excluding any that are currently running).

### Sprint.GetById(SprintById) returns (SprintResponse);
Gets a single sprint by thes sprint ID

### Sprint.Create(Sprint) returns (SprintResponse);
Creates a new sprint
### Sprint.Update(Sprint) returns (SprintResponse);
Updates a pre-existing sprint.


### Sprint.GetComments(SprintIdAndProject) returns (SprintCommentsResponse);
Fetches all sprint comments for a given spint

### Sprint.PastComments(SprintIdAndProject) returns (SprintCommentsResponse);
Fetches all comments for sprints prior to this one.

### Sprint.AddComment(SprintComment) returns (SprintCommentResponse);
Adds a new comment to the current sprint
### Sprint.DeleteComment(SprintCommentId) returns (.ticket.common.Status);
Deletes a comment from a sprint
### Sprint.ResolveComment(SprintCommentIdWithSprint) returns (.ticket.common.Status);
Resolves a comment on any sprint
