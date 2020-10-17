
const { request } = require('express');

function createCounter (name, code, queues) {

    var counter = {
        
        counterName : name,
        counterCode : code,
        typeQueues  : queues

    };

    // return the queue with the requestCode passed
    // return undefined if the queue is not setted for the current counter
    counter.getQueue = function (requestCode){

        // check if the requestCode is valid or not
        var requestIndex = counter.typeQueues.findIndex((request) => {

            return request.requestType === requestCode;

        });

        // the request type wasn't configured in the JSON file
        if(requestIndex === -1)
            return undefined;

        return counter.typeQueues[requestIndex];

    }

    // return the number of queues configured for the current counter
    counter.getQueuesNumber = function (){

        return counter.typeQueues.length;

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