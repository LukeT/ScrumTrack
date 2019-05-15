# Ticket Service _ticket.svc.ticket_
The ticket service is responsible for fetching, modifying and commenting on tickets. 

## Methods
### Ticket.GetAll(GetAllRequest) returns (TicketsListResponse);
Fetch all tickets based on a given filter.
### Ticket.Get(GetRequest) returns (TicketResponse);
Get a single ticket within a project.
### Ticket.Create(Ticket) returns (TicketResponse);
Create a new ticket within a project.
### Ticket.Update(Ticket) returns (TicketResponse);
Update a pre-existing ticket.
### Ticket.Move(MoveRequest) returns (.ticket.common.Status);
Move a new ticket to a new location (between locations)

### Ticket.GetComments(GetRequest) returns (CommentsListResponse);
Fetch all comments on a given ticket.
### Ticket.CreateComment(TicketComment) returns (CommentResponse);
Create a new comment on a ticket.
