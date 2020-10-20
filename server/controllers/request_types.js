var express = require('express');
var router = express.Router();
var requestTypes = require("../config/request_type.json");
var queueManager = require("../helper/queueManager.js")();

module.exports = function () {

    //Send all requestType
    router.get('/', function (req, res) {
        var tmp = [];
        
        if(requestTypes && requestTypes.length > 0){
            requestTypes.forEach(element => {
                tmp.push(element);
            });
        }

        res.send(tmp);
    });

    router.post('/addNumberInQueue', function (req, res) {
        if(req.body.requestTypeId){
            var queue = queueManager.getQueue();
            if(!queue)
                res.send("Error: Any queue found with this requestTypeId");
            else{
                res.send(queue.push())
            }
        }
        else{
            res.send("Error: MISSING requestTypeId");
        }
    })    
    return router;
}