//Load modules
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const session =  require('express-session');
const flash = require("connect-flash");

const admin = require('./routes/admin');

const app = express();

//Config
    //Sessão
        app.use(session({
            secret: 'qualquer coisa///',
            resave: true,
            saveUninitialized: true
        })) // creating session
        app.use(flash())
    
    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg"); //variables global
            res.locals.error_msg = req.flash("error_msg");
            next();
        })
        
    //Bodyparse
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json())

    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //Mongoose  
        mongoose.Promise = global.Promise; // essential line, not forget to add here
        mongoose.connect("mongodb://localhost/blogapp", {useNewUrlParser: true})
        .then(() => {
            console.log('Connect to mongo');
        })
        .catch(err => {
            console.log('Error to connect mongo: '+ err);
        });

    //Public
        app.use(express.static(path.join(__dirname, "public"))); // files from static files

//Routes
    app.use('/admin', admin);
//Others

const PORT = 8081

app.listen(PORT, () => {
    console.log('Servidor is on!');
});