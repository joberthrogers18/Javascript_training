const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const db = require('./models/db');


//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'})); // main significa o template padrão da aplicação  
    app.set('view engine', 'handlebars'); // usando handlebars como template

    //Body Parser

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Rotas
    app.get('/cad', (req, res) => {
        res.render('formulario')
    });

    app.get('/', function(req, res){
        Post.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }) // retorna tudo que estiver na tabela post
        .then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.post('/add', (req, res)=> {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        })
        .then(function(){
            res.redirect('/')
        })
        .catch(function(err){
            res.send('Houve um erro : ' + err);
        })
        // posso usar Post.create(req.body); pois o que vem do formulario tem a mesma posicao e o nome das variaveis presentes no banco de dados
        
    });


app.listen(8081, function(){
    console.log('Server is on!');
});