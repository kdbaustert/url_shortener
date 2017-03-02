##Clone
```
git clone https://github.com/kdbaustert/url_shortener.git
```

## Installation

You will need node and NPM

[Node](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/)

Using a terminal cd into the directory and then type

```
npm install
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

##API Reference

Use postman do a POST request to localhost:3000/api/v1/url and you will get the short url back

```
long url: http://www.HkKNCJH9l.com
```

You can also check the status by doing a get request to localhost:3000/status you should receive the following

```
{
  "healthy": true
}
```

##API Endpoints

Status
GET: /status

Display url
POST: /api/v1/url
