global.__compiled_dirname = __dirname;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./controllers/index');


var app = express();

app.io = require('./helpers/socketIo')();

// view engine setup
app.set('views', [path.join(__dirname, 'views')]);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
app.use(cookieParser());

app.use(require('less-middleware')(path.join(process.cwd(), 'public')));
app.use(express.static(path.join(process.cwd(), 'public')));

//Espongo i file JS e i css delle librerie NPM
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JQuery JS
app.use('/js/jquery-sparkline', express.static(__dirname + '/node_modules/jquery-sparkline')); // redirect JQuery Sparkline JS
app.use('/js/moment', express.static(__dirname + '/node_modules/moment')); // redirect Moment JS
app.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); //redirect FONTS Bootstrap
app.use('/js/bootbox', express.static(__dirname + '/node_modules/bootbox')); //redirect Bootbox
app.use('/js/fontawesome5', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free')); //redirect font-awesome lib

app.use('/', index(app));

// set a cookie to requested locale
app.get('/setLocale/:locale', function (req, res) {
    res.cookie('locale', req.params.locale);
    res.redirect('back');
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise' + p + 'reason:' +  reason);
    // application specific logging, throwing an error, or other logic here
});
module.exports = app;
