// require models/url

const url = require('../models/url');

// Export express
module.exports = (express) => {
  const router = express.Router();

  // Router
  router.get('/', (req, res) => {
    res.json({ main: 'Main route hit!' });
  });

  /*router.get('/go/:shortenedUrl', (req, res) => {
    req.body.shortened_url = req.params.shortenedUrl;
    url.findShortenedURL(shortURL, (data) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect('http://www.' + data.original_url);
    });
  });*/

  router.get('/go/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  url.findShortenedURL(shortURL, (data) => {
    if (data == null) {
      const response = {
        message: 'That ShortURL is not registered in our database.',
      };
      res.json(response);
    } else {
      res.redirect(data.original_url);
    }
  });
});

  router.use('/api/v1', require('./api/url')(express));

    // Return express router

  return router;
};
