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
            debug.debug_error("error!");
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success("successfully created");
        });

    });

    //Get all
    router.get('/url', (req, res) => {
        url.findAll((err) => {
            res.status(500).json(err);
            debug.debug_error("error!");
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success("successfully found all!");
        })
    });

    //Get by id
    router.get('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.find(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error("error!");
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success("successfully found");
        })
    });

    //Update
    router.get('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.update(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error("error!");
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success("successfully updated");
        })
    });

    //Delete
    router.delete('/url/:id', (req, res) => {
        req.body.id = req.params.id;
        url.destroy(req.body, (err) => {
            res.status(500).json(err);
            debug.debug_error("error!");
        }, (data) => {
            res.status(200).json(data);
            debug.debug_success("successfully deleted!");
        })
    });

    //Return

    return router;

};
