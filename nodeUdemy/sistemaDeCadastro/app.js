const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'})); // main significa o template padrão da aplicação  
    app.set('view engine', 'handlebars'); // usando handlebars como template

    //Body Parser

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //conexão com o banco de dados 
    const sequelize = new Sequelize('test','root', 'winterfell', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: Op, // use Sequelize.Op
    });

//Rotas
    app.get('/cad', (req, res) => {
        res.render('formulario')
    });

    app.post('/add', (req, res)=> {
        res.send('Texto: '+ req.body.titulo + ' Conteúdo: '+ req.body.conteudo);
    });


app.listen(8081, function(){
    console.log('Server is on!');
});