// require models/url

const url = require('../models/url');

// Export express
module.exports = (express) => {
  const router = express.Router();

  // Router
  router.get('/', (req, res) => {
    res.json({ main: 'Main route hit!' });
  });

  router.get('/go/:shortenedUrl', (req, res) => {
    req.body.shortened_url = req.params.shortenedUrl;
    url.findShortenedURL(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect('http://www.' + data.original_url);
    });
  });

  router.use('/api/v1', require('./api/url')(express));

    // Return express router

  return router;
};
