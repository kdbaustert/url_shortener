// require models/url
const url = require('../models/url');
const debug = require('nx-debugtool');

// Export express
module.exports = (express) => {
  const router = express.Router();

  // Router
  router.get('/', (req, res) => {
    res.json({ main: 'Main route hit!' });
    debug.debug('Main route successfully responded.', 'Successful');
  });

  router.get('/status', (req, res) => {
    res.json({ healthy: true });
    debug.debug('The status route successfully responded.', 'Successful');
  });

  router.get('/go/:shortUrl', (req, res) => {
    const request = req;
    const response = res;
    request.body.shortUrl = request.params.shortUrl;
    url.findShortenedURL(request.body, (err) => {
      response.status(500).json(err);
      debug.debug('Could not redirect because of the following error ' + err, 'Error! ');
    }, (data) => {
        // response redirects to original url
      response.redirect(data.original_url);
      debug.debug('redirect successful', 'Successful');
    });
  });

  router.use('/api/v1', require('./api/url')(express));

  // Return express router
  return router;
};
