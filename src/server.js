//requires

const express = require('express');
const bodyParser = require('body-parser');
const debug = require("./modules/debug");

//Express
const app = express();

//Port
const port = process.env.PORT || 3000;

//pin to app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
  extended: true,
}));

//Route
app.use('/', require('./routes')(express));

//Listen on port

const server = app.listen(port, () => {
  console.log('Server Active on'.active, port);
});

//Export server

module.exports = server;
