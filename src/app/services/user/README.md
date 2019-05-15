# User Service _ticket.svc.user_
The user service is responsible for finding, updating and removing users.

Passwords are securely stored using bcrypt hashes.

## Methods

### User.GetById(Id) returns (AuthUser);
Fetch a user by their ID0

### User.GetByUsername(Username) returns (AuthUser);
Fetch a user by their username

### User.GetByEmail(Email) returns (AuthUser);
Fetch a user by their email address

### User.GetAll(ticket.common.Empty) returns (UserList);
Get all users registered in the system.

### User.CheckPassword(PasswordCheck) returns (ticket.common.Status);
Chek and compare a users password

### User.Create(AuthUser) returns (Id);
Create a new user

### User.Update(AuthUser) returns (UserResponse);
Update a current user.

### User.Delete(Id) returns (ticket.common.VoidResponse);
Delete a user based on their ID.
