//require
const genShortenUrl = require('../modules/short_url');

module.exports = (express) => {
  const router = express.Router();

  //route for api status
  router.get('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,
    });
  });

  //Route to redirect
  router.get('/go/:shortenedUrl', (req, res) => {
    req.body.shortened_url = req.params.shortenedUrl;
    url.findShortenedURL(req.body, (err) => {
      res.status(500).json(err);
      debug.debugError('error!');
    }, (data) => {
      res.redirect('http://www.' + data.original_url);
    });
  });

return router;

};
