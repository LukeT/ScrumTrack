# Project Service _ticket.svc.project_
The mail service sends emails to users. In the current implementation it uses pre-defined email templates configured in SendGrid and uses variables passed to make them dynamic.

Current usages are things such as password resets, confirmation emails, etc.

## Methods

###	Project.Get(Shortcode) returns (ProjectResponse);
Get a single project by it's shortcode

###	Project.GetAll(ticket.common.Empty) returns (ProjectsResponse);
Get all available projects.
