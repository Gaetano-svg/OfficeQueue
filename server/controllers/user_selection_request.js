var express = require('express');
var router = express.Router();/*
var io = require('../helpers/socketIo')();
var queueMan = require('../helpers/queueManager')();*/

module.exports = function () {

    router.get('/', function (req, res) {
        res.render('pages/ticketUser.html');
    });

    router.get('/getQueue',function(req,res){
        /*

        */
        res.send("CIAO");
    })
    return router;
}