const fs = require('fs');

exports.debug = (data, status) => {
  // Timestamp
  const time = new Date() + '\n';

  // colors
  const red = '\x1B[31m';
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';

  // if status is not successful
  if (status !== 'Successful') {
    var data = cyan + time + red + status + data;
  } else {
    data = cyan + time + data + ': ' + green + status;
  }

  if (process.env.DEBUG === 'true') {
    // create log file
    fs.appendFile('./logs/debuglog.log', data, (err) => {
      if (err) {
        return console.log(err);
      }
    });
    console.log(data);
  }
};
