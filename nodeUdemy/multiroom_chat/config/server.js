var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

//set variables 'view engine' and 'view' from express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Config's middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* Make the autoload from routes, models, controllers for the object app*/

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;


