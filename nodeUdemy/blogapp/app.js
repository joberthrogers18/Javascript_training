//Load modules
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
const path = require("path");

const admin = require('./routes/admin');

const app = express();

//Config
    //Bodyparse
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json())

    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Mongoose  
        //...
    //Public
        app.use(express.static(path.join(__dirname, "public"))); // files from static files

//Routes
    app.use('/admin', admin);
//Others

const PORT = 8081

app.listen(PORT, () => {
    console.log('Servidor is on!');
});