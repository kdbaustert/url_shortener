const express = require('express');
//parse the json data
const bodyParser = require('body-parser');
//new instance of express
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

//configuration
//set the port to a variable, defaults at 3000
 const port = process.env.PORT || 3000;
//export server
exports.server = app.listen(port, () => {
  console.log('Server Active On', port);
});
