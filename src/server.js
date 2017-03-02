const express = require('express');
//parse the json data
const bodyParser = require('body-parser');
//new instance of express
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

//routes
app.use('/', require('./routes')(express));

//configuration
 const port = process.env.PORT || 3000;
//export server
exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
