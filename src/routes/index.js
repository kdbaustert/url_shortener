// require models/url

const url = require('../models/url');

// Export express
module.exports = (express) => {
  const router = express.Router();

  // Router
  router.get('/', (req, res) => {
    res.json({ main: 'Main route hit!' });
  });

  //redirect if data is not null
  router.get('/go/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  url.findShortenedURL(shortURL, (data) => {
    if (data !== null) {
      res.redirect(data.original_url);
    } else {
      const response = {
        message: 'Cannot find that short url!',
      };
      res.json(response);
    }
  });
});

  router.use('/api/v1', require('./api/url')(express));

    // Return express router

  return router;
};
