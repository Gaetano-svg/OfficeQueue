
const { request } = require('express');

function createCounter (name, code, queues) {

    var counter = {
        
        counterName : name,     // Counter NAME
        counterCode : code,     // Counter CODE
        queues  : queues        // A list of QUEUE OBJECTS managed by the counter

    };

    // return the queue with the requestCode passed
    // return undefined if the queue is not setted for the current counter
    counter.getQueue = function (requestCode){

        // check if the requestCode is valid or not
        var requestIndex = counter.queues.findIndex((request) => {

            return request.requestType === requestCode;

        });

        // the request type wasn't configured in the JSON file
        if(requestIndex === -1)
            return undefined;

        return counter.queues[requestIndex];

    }

    // return the references to all the queues managed by the counter
    counter.getAllQueues = function () {

        return counter.queues;

    }

    // return the number of queues configured for the current counter
    counter.getQueuesNumber = function (){

        return counter.queues.length;

    }

    // return the name of the counter
    counter.getCounterName = function () {

        return counter.counterName;

    }

    // return the id of the counter 
    counter.getCounterCode = function () {

        return counter.counterCode;

    }

    return counter;

}
module.exports = createCounter;