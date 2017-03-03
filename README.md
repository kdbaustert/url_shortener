##Clone
```
git clone https://github.com/kdbaustert/url_shortener.git
```

## Installation

You will need node and NPM

[Node](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/)

Using your CLI cd into the directory and then type

```
npm install
```

MySQL is required you will need to create a .env file with the following information

```
DB_NAME=[database name]
DB_USER=[username]
DB_PASS=[password]
DB_HOST=[host]
DB_SCHEMA=mysql
DB_PORT=[port]
```

##Starting the server

To start the server simply type

```
node src/server.js
```

or you can install nodemon npm i nodemon -g then type in the following

```
nodemon src/server.js
```

In your CLI you should see

```
Server Active On 3000
```

##API Reference

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

##Routes

GET /go/:shortURL

##API Endpoints

Status
GET: /status

Create a shortened URL POST: /api/v1/url

Display all GET: /api/v1/url

Display URL based on id GET: /api/v1/url/:id

Update URL based on id POST: /api/v1/url/:id

Delete url based on id DELETE: /api/v1/url/:id
