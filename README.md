#Clone

in your CLI

```
git clone https://github.com/kdbaustert/url_shortener.git
```

Or download by clicking the green "Clone or download"

## Installation

You will need node and NPM

[Node](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/)

Using your CLI cd into the directory and then type

```
npm install
```
this will install the necessary packages

MySQL is required you will need to create a .env file

You can do this in your CLI by typing

```
touch .env
```

with the following information

```
DB_NAME=[database name]
DB_USER=[username]
DB_PASS=[password]
DB_HOST=[host]
DB_SCHEMA=mysql
DB_PORT=[port]
```

#Starting the server

To start the server simply type

```
node src/server.js
```

or you can install nodemon this will allow you to make changes without having to reload the server each time

```
npm i nodemon -g
```

then type in the following

```
nodemon src/server.js
```

In your CLI you should see

```
Server Active On 3000
```

#API Reference

Use postman do a POST request to localhost:3000/api/v1/url with the following data inside body

```
{
"original_url": "http://www.google.com",
"shortened_url": "shortened_url"
}
```

You can also check the status by doing a get request to localhost:3000/status you should receive the following

```
{
  "healthy": true
}
```

#Starting point

```
localhost:3000
```

#Routes

GET /go/:shortURL

#API Endpoints

Status
GET: /status

Create a shortened URL POST: /api/v1/url

Display all GET: /api/v1/url

Display URL based on id GET: /api/v1/url/:id

Update URL based on id POST: /api/v1/url/:id

Delete url based on id DELETE: /api/v1/url/:id

#Debugging

####Usage
To turn on debugging make sure your in the directory of the url_shortner and type

```
DEBUG=true node src/server.js
```

or using nodemon

```
DEBUG=true nodemon src/server.js
```

In your CLI you should see

```
Debugging activated!
```

If it was successfully turned on

When each route is hit you should see a console log within your CLI giving either a successful or error message

If you don't want debugging simply type

```
DEBUG=false node src/server.js
```

or with nodemon src/server.js

```
DEBUG=false nodemon src/server.js
```
