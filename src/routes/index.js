//require
const genShortenUrl = require('../modules/short_url');
const data = require('../../url/url');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,
    });
  });

  //get the url
  router.post('/api/v1/url/', function ( req, res ) {
    res.send('short url: ' + 'http://www.' + genShortenUrl.genShortenUrl(data.url) + '.com');
  });

return router;

};
