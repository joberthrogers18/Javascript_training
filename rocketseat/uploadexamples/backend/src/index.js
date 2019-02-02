const express = require("express");
const morgan = require("morgan"); // recover logs

//Load mongodb
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/upload", {useNewUrlParser: true})
    .then(() => {
        console.log("Mongo is connect");
    }).catch(err => {
        console.log("Error to connect mongo: " + err);
    }); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);