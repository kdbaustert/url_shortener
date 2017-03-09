// require models/url

const url = require('../models/url');
const debug = require("../modules/debug");

// Export express
module.exports = (express) => {
  const router = express.Router();

  // Router
  router.get('/', (req, res) => {
    res.json({ main: 'Main route hit!' });
    debug.debug_success("Main route successful");
  });

  router.get('/status', (req, res) => {
      url.findAll((err) => {
          res.status(500).json(err);
          res.json({ Healthy: true });
          debug.debug_error("status route error!");
      }, (data) => {
          res.status(200).json(data);
          debug.debug_success("Status route successful");
      })
  });

  router.get('/go/:shortUrl', (req, res) => {
      const request = req;
      const response = res;
      request.body.shortUrl = request.params.shortUrl;
      url.findShortenedURL(request.body, (err) => {
        response.status(500).json(err);
      }, (data) => {
        // response redirects to original url
        response.redirect(data.original_url);
      });
    });

  router.use('/api/v1', require('./api/url')(express));

    // Return express router

  return router;
};
