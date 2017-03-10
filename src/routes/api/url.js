//requires
const url = require('../../models/url');
const genShortenUrl = require('../../modules/short_url');
const debug = require("../../modules/debug");

module.exports = (express) => {

    //Express router
    const router = express.Router();

    //Create
    router.post('/url', (req, res) => {
        req.body.shortened_url = genShortenUrl.genShortenUrl();
        url.create(req.body, (err) => {
            res.status(500).json(err);
            debug.debug('Debugging activated!' + err, 'Error!' );
        }, (data) => {
            res.status(200).json(data);
            debug.debug('The shortened URL was successfully created.' , 'Successful');
        });

    });

    //Get all
    router.get('/url', (req, res) => {
        url.findAll((err) => {
            res.status(500).json(err);
            debug.debug('The URLs were not successfully read because of the following error: ' + err, 'Error! ');
        }, (data) => {
            res.status(200).json(data);
            debug.debug('The URLs were successfully read.', 'Successful');
        })
    });

    //Get by id
    router.get('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.find(req.body, (err) => {
            res.status(500).json(err);
            debug.debug('Could not read the url because of the following error: ' + err, 'Error! ');
        }, (data) => {
            res.status(200).json(data);
            debug.debug('The URL was successfully read by the id.', 'Successful');
        })
    });

    //Update
    router.post('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.update(req.body, (err) => {
            res.status(500).json(err);
            debug.debug('The URL was not successfully updated because of the following error: ' + err, 'Error! ');
        }, (data) => {
            res.status(200).json(data);
            debug.debug('The URL was successfully updated.', 'Successful');
        })
    });

    //Delete
    router.delete('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.destroy(req.body, (err) => {
            res.status(500).json(err);
            debug.debug('The URL was not successfully deleted because of the following error: ' + err, 'Error! ');
        }, (data) => {
            res.status(200).json(data);
            debug.debug('The URL was successfully deleted.', 'Successful');
        })
    });

    //Return

    return router;

};
