var express = require('express');
var router = express.Router();
var io = require('../helpers/socketIo')();

var counterConfiguration = require('../config/counters.json');
var requestTypeConfiguration = require('../config/request_types.json');

module.exports = function (app) {

    router.use('/ticketUser', require('./user_selection_request.js')());
    //router.use('employeePage', .....)
    //other page

    /* GET home page. */
    router.get('/', function (req, res) {
        res.render('pages/index.html');
    });

    
    
    return router;
}