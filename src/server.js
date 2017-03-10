// requires
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('./modules/debug');

// Express
const app = express();

// Port
const port = process.env.PORT || 3000;

// Pin to app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Route
app.use('/', require('./routes')(express));

// Listen on port
const server = app.listen(port, () => {
  console.log('Server Active on', port);
  if (process.env.DEBUG) {
    debug.debug('Debugging Active!', 'Successful');
  }
});

// Export server
module.exports = server;
