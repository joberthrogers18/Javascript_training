//Load modules
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const session =  require('express-session');
const flash = require("connect-flash"); // flash it is message for a during period of time till load

const admin = require('./routes/admin'); //import routes
const user = require('./routes/usuario');


//Load model posts
require("./models/Posts")
const Post = mongoose.model("post");

//Load model Category
require("./models/Category");
const Category = mongoose.model("category");

//load file contain the authenticate user
    const passport =require("passport");
    require('./config/auth')(passport);

//load db file

const db = require("./config/db")

const app = express();

//Config
    //Sessão
        app.use(session({
            secret: 'qualquer coisa///',
            resave: true,
            saveUninitialized: true
        })) // creating session                                 //Only will work if this sequence is execute

        app.use(passport.initialize()); // initialize passport
        app.use(passport.session()); //initialize the session

        app.use(flash())
        
    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg"); //variables global
            res.locals.error_msg = req.flash("error_msg"); 
            res.locals.error = req.flash("error"); // For display the errors in screen from passport we need create this variable error
            res.locals.user = req.user || null; //variable for save data from user and passport create
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
        mongoose.connect(db.mongoUri, {useNewUrlParser: true})
        .then(() => {
            console.log('Connect to mongo');
        })
        .catch(err => {
            console.log('Error to connect mongo: '+ err);
        });

    //Public
        app.use(express.static(path.join(__dirname, "public"))); // files from static files

//Routes
    app.get("/", (req, res) => {
        Post.find().populate("category").sort({date: 'desc'})
        .then(posts => {
            res.render("index", {posts: posts});
        }).catch(err => {
            req.flash("error_msg", "Não foi possível carregar as postagens recentes!");
            res.redirect("/404");
        });
    });

    app.get("/postagem/:slug",(req, res) => {
        Post.findOne({slug: req.params.slug})
        .then(post => {
            if(post){
                res.render("postagem/index", {post: post});
            }else{
                req.flash("error_msg", "Esta postagem não existe");
                res.redirect("/");
            }
        }).catch(err => {
            req.flash("error_msg", "Houve um erro interno!");
            res.redirect("/");
        });
    });

    app.get("/404", (req, res) => {
        res.send("Error 404");
    });

    app.get("/categorias", (req, res) => {
        Category.find().then(categories => {
            res.render("categorias/index", {categories: categories});
        }).catch(error => {
            req.flash("error_msg", "Houve um erro interno ao listar as categorias!");
            res.redirect("/");
        });
    });

    app.get("/categorias/:slug", (req, res) => {
        Category.findOne({slug: req.params.slug}).then(category => {
            if(category){
                Post.find({category: category._id}).then(posts =>{
                    console.log(posts);
                    res.render("categorias/postagens", {posts: posts, category: category});
                }).catch(err => {
                    req.flash("error_msg", "Houve um erro ao listar os posts!");
                    res.redirect("/");
                });
            }else{
                req.flash("error_msg", "Esta categoria não existe");
                res.redirect("/");
            }
        }).catch(err => {
            req.flash("error_msg", "Houve um erro ao carregar a página desta categoria");
            res.redirect("/");
        });
    })

    app.use('/admin', admin); // use prefix to routes
    app.use("/usuarios", user);
//Others

const PORT = 8081

app.listen(PORT, () => {
    console.log('Servidor is on!');
});