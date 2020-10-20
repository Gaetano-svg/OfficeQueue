global.__compiled_dirname = __dirname;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./controllers/index');


var app = express();

app.io = require('./helpers/socketIo')();

// create and initialize the QUEUE MANAGER
app.queueMan = require('./helpers/queueManager')();

// create and initialize the COUNTER MANAGER
app.counterMan = require('./helpers/counterManager')();

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise' + p + 'reason:' +  reason);
    // application specific logging, throwing an error, or other logic here
});
module.exports = app;
