# Clone

in your CLI

```
git clone https://github.com/kdbaustert/url_shortener.git
```

Or download by clicking the green "Clone or download"

# Installation

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

# Starting the server

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

Use postman do a POST request to localhost:3000/api/v1/url with the following data inside body it needs to be raw JSON

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

# Starting point

```
localhost:3000
```

# Routes

GET /go/:shortURL

# API Endpoints

Status
GET: /status

Create a shortened URL POST: /api/v1/url

Display all GET: /api/v1/url

Display URL based on id GET: /api/v1/url/:id

Update URL based on id POST: /api/v1/url/:id

Delete url based on id DELETE: /api/v1/url/:id

# Debugging

For more information on the debugging tool view the docs here: [Debugging package documentation](https://github.com/kdbaustert/Utility-Tool)

### Usage
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

# Coding Style

The code styling used in this project was done with eslint-config-airbnb and installing the plugin for Atom You can find the documentation for it here [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and here for Atom [eslint for Atom](https://atom.io/packages/eslint)

# Unit Tests
Please make sure you have installed mocha and chai using npm globally

Then simply run mocha in your CLI.

This will run a test for each route.

For the /go/:shortURL test the shortened url of Cn1bTPv needs to be in the database or you may change it based on a existing url

```
.get('/go/Cn1bTPv') // This shortURL needs to be in the database
```

All test should come back passed

<img width="764" alt="screen shot 2017-03-12 at 8 11 09 pm" src="https://cloud.githubusercontent.com/assets/12704978/23837546/9d081630-0760-11e7-9a23-c2d2e93131ea.png">
