# API Endpoints

### api/signup _(POST)_

##### Expects:

- username (str)
- password (str)
- confirmPassword (str)
- email (str)
- firstName (str)
- lastName (str)

##### Returns:

- a success boolean

### api/login \_(POST)

Logs the user with the username and password in

##### Expects:

- username
- password

##### Returns:

- a success boolean

### api/check-auth _(GET)_

##### Returns:

- an isAuthenticated boolean

### api/get-csrf _(GET)_

##### Returns:

- a CSRF token (str)
