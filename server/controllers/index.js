﻿var express = require('express');
var router = express.Router();
var io = require('../helpers/socketIo')();

var counterConfiguration = require('../config/counters.json');
var requestTypeConfiguration = require('../config/request_types.json');

module.exports = function (app) {

    router.use('/api/ticketUser', require('./user_selection_request.js')());
    router.use('/api/requestTypes', require('./request_types.js')());
    router.use('/api/counters', require('./counters.js')());

    // /* GET home page. */
    // router.get('/', function (req, res) {
    //     res.render('pages/index.html');
    // });

    return router;
}