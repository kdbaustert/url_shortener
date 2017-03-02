//require
const shortid = require('shortid');
const data = require('../../url/url');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,
    })
  });

  //get the url
  router.get('/api/v1/url/', function ( req, res ) {
    res.send('short url: ' + 'http://www.' + shortid.generate(data.url) + '.com');
  });

return router;

};
