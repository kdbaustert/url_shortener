//require
const data = require('../../url/url');
const genShortenUrl = require('../modules/short_url');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,
    })
  });

  //get the url
  router.post('/api/v1/url/', function ( req, res ) {
    res.send('short url: ' + 'http://www.' + genShortenUrl.genShortenUrl() + '.com');
  });

return router;

};
