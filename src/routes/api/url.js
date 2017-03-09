//requires
const url = require('../../models/url');
const shorten_url = require('../../modules/short_url');
const debug = require("../../modules/debug");

module.exports = (express) => {

    //Express router
    const router = express.Router();

    //Create
    router.post('/url', (req, res) => {
        req.body.shortened_url = shorten_url.shorten_url();
        url.create(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error('The shortened URL was not successfully created because of the following error: ' + err);
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success('The shortened URL was successfully created.');
        });

    });

    //Get all
    router.get('/url', (req, res) => {
        url.findAll((err) => {
            res.status(500).json(err);
            debug.debug_error('The URLs were not successfully read because of the following error: ' + err);
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success('The URLs were successfully read.');
        })
    });

    //Get by id
    router.get('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.find(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error('The URL was not successfully read because of the following error: ' + err);
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success('The URL was successfully read.');
        })
    });

    //Update
    router.get('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.update(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error('The URL was not successfully updated because of the following error: ' + err);
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success('The URL was successfully updated.');
        })
    });

    //Delete
    router.delete('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.destroy(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error('The URL was not successfully deleted because of the following error: ' + err);
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success('The URL was successfully deleted.');
        })
    });

    //Return

    return router;

};
