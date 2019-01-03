var express = require('express');
var app = express();
app.set('view engine', 'ejs'); // ejs responsavel pela criação de views usando htmls dinamicos
app.set('views', './app/views'); // local de arquivo para buscar arquivos usando require, ajuda a achar os arquivos pelas rotas
//aponta o caminho das views.

module.exports = app;