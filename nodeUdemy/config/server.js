var express = require('express');
var consign = require('consign');
var bodyParse =require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); // ejs responsavel pela criação de views usando htmls dinamicos
app.set('views', './app/views'); // local de arquivo para buscar arquivos usando require, ajuda a achar os arquivos pelas rotas
//aponta o caminho das views.

app.use(bodyParse.urlencoded({ extended: true})); // por ser um midware o body parse precisa ser importando antes do consign
app.use(expressValidator()); //midware responsavel por validar campos

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app); 
// pega todas as instancias da pasta routes com todas as rotas e incluem dentro do servido no caso app



module.exports = app;