var express = require('express');
var router = express.Router();/*
var io = require('../helpers/socketIo')();
var queueMan = require('../helpers/queueManager')();*/
var counterManager = require("../helpers/counterManager.js")();

module.exports = function () {

    router.get('/', function (req, res) {
        res.render('pages/ticketUser.html');
    });

    router.get('/getQueue',function(req,res){
        /*

        */
        res.send("CIAO");
    });

    // select the next queue to be served by a counter
    router.get('/getNextQueue', function(req,res){
        
        let counter = counterManager.getCounter(req.body.counterCode);
        let counter_queues = counter.getAllQueues();

        //Select the max queue.size()
        let max = counter_queues[0].size()
        counter_queues.forEach(queue => {
            if(queue.size()>max) max = queue.size(); 
        });

        //check if there are more than one queue with size==max
        let max_queue = []; 
        counter_queues.forEach(queue => {
            if (queue.size()==max) max_queue.push(queue); 
        }); 

        if(max_queue.length==1){

            res.json(max_queue);
        }
        else {
            //In this case i have to select the request with the lowest service time
            let min = max_queue[0]; 
            max_queue.forEach(queue => {
                if(queue.getServiceTime()<min.getServiceTime()) min = queue;  
            });

            res.json(min);
        }

    });
    return router;
}