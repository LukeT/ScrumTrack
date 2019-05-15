# Ticket History Service _ticket.svc.history_
This service is responsible for creating and fetching history related to tickets

## Methods
### Ticket.GetBySprint(LogSprint) returns (LogsResponse);
Fetch all changes that have occurred during a sprint, optionally within a specific timeframe.

### Ticket.GetByTicket(LogTicket) returns (LogsResponse);
Get all changes that have occurred ofr a single ticket

### Ticket.Log(LogItem) returns (LogResponse);
Create a new comment on a ticket.
