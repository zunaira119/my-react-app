const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const mongoose = require('mongoose');
const ContactUs = require('../models/contactUs');
const contactUsRouter = express.Router();
contactUsRouter.use(bodyParser.json());
contactUsRouter.route('/')
.post(cors.corsWithOptions,(req, res, next) => {
    ContactUs.create(req.body)
    .then((contact) => {
        console.log('Category Created ', contact);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        res.json(contact);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = contactUsRouter;