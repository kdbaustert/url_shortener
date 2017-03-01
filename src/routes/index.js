module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    console.log("route hit");
    res.json({
      healthy: true,
    })
  });

return router;

}
