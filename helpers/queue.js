var counterConfiguration = require('../config/counters.json');
var requestTypeConfiguration = require('../config/request_types.json');
var queue;

function createQueueManagement() {

    if (!queue)
        queueMan = {};

    queueMan.getQueues = function () {
        return [];
    }

    return queueMan;
}
module.exports = createQueueManagement;