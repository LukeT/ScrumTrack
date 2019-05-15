# Mail Service _ticket.svc.mail_
The mail service sends emails to users. In the current implementation it uses pre-defined email templates configured in SendGrid and uses variables passed to make them dynamic.

Current usages are things such as password resets, confirmation emails, etc.

## Methods

### Mail.Post(Envelope) returns (Stamp);
Sends an email using a pre-defined template to an email address.
