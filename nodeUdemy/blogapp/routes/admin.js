const express = require("express");
const router = express.Router()
const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model('category'); // for model Post work we need the line above
require('../models/Posts')
const Post = mongoose.model('post'); // for model Post work we need the line above

router.get('/', (req, res) => {
    res.render("admin/index")
});

router.get('/posts', (req, res) => {
    res.send('Pagina de posts');
});

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias", { errors : {}});
});

router.post('/categorias/nova', (req, res) => {
    
    var errors = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        errors.push({text: "Name invalid !"});
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        errors.push({text: "Slug invalid !"});
    }

    if(req.body.name.length < 4){
        errors.push({text: 'Size name is least than 4 characters !'});
    }

    if(errors.length > 0){
        res.render("/admin/addcategorias", { errors : errors});
    }
    
    var newCategory = req.body;

    new Category(newCategory).save()
    .then(() => {
        req.flash("success_msg", "Category created successful!");
        res.redirect('/admin/categorias');
    })
    .catch(err => {
        req.flash("error_msg", "Error in create category, try again!")
        res.redirect('/admin');
    }) // save in mongodb
});

router.get('/categorias', (req, res) => {
    Category.find().sort({date: 'desc'}).then(categories => {
        res.render("admin/categorias", { categories :categories });
    }).catch(err => {
        req.flash("error_msg", "Error to list the categories");
        res.redirect('/admin');
    }) // list all categories from mongodb
});

router.get('/categorias/edit/:id', (req, res) => {
    Category.findOne({ _id : req.params.id})
    .then(category => {
        res.render("admin/editcategorias", {category: category});
    })
    .catch(err => {
        req.flash("error_msg", "This category not exists!");
        res.redirect("/admin/categorias");
    });
});

router.post("/categorias/edit", (req, res) => {

    var errors = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        errors.push({text: "Name invalid !"});
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        errors.push({text: "Slug invalid !"});
    }

    if(req.body.name.length < 4){
        errors.push({text: 'Size name is least than 4 characters !'});
    }

    if(errors.length > 0){

        var allErrors = '';

        for(var i = 0; i < errors.length; i++){
            allErrors += " "+ (i+1) + " - " +  errors[i].text ;
        }

        req.flash("error_msg", allErrors);

        res.redirect("/admin/categorias/edit/"+req.body.id);
        return;
    }


    Category.findOne({_id: req.body.id})
    .then(category => {
        category.name = req.body.name
        category.slug = req.body.slug

        category.save().then(() =>{
            req.flash("success_msg", "Update was done!");
            res.redirect("/admin/categorias");
        }).catch(err => {
            req.flash("error_msg", "Ocorrur an error when tried save, please try again!");
            res.redirect("/admin/categorias");
        });

    }).catch(err => {
        req.flash("error_msg", "Ocurr a error to edit the category !");
        res.redirect("/admin/categorias")
    })
});

router.post("/categorias/deletar", (req, res) => {

    Category.deleteOne({_id: req.body.id})
    .then(() => {
        req.flash("success_msg", "Categorie remove successfuly");
        res.redirect("/admin/categorias");
    }).catch(err => {
        req.flash("error_msg", "Ocurr an error in remove categorie");
        res.redirect("/admin/categorias");
    });
});

router.get("/postagens", (req, res) => {
    Post.find().populate("category").sort({date: 'desc'}).then(posts => {
        res.render("admin/postagens", {posts: posts});
    }).catch(err => {
        req.flash("error_msg", "Não foi possível carregar os posts");
        res.redirect("/admin");
    });

});

router.get("/postagens/add", (req, res) => {
    Category.find().then(category =>{
        res.render("admin/addpostagem", {category: category})
    }).catch(err =>{
        req.flash("error_msg", "Houve um erro ao carregar o formulario");
        res.redirect("/admin");
    })
});

router.post("/postagens/nova", (req, res) => {
    var errors = []

    if(req.body.category === 0){
        errors.push({text: "Categoria invalida, registre uma nova categoria! "});
    }

    if(errors.length > 0){
        res.render("admin/addpostagem", {errors: errors})
    }
    else{
        const newPost = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            category:  req.body.category,
            slug: req.body.slug
        }

        new Post(newPost).save().then(() => {
            req.flash("success_msg", "Postagem criada com sucesso");
            res.redirect("/admin/postagens");
        }).catch(err => {
            req.flash("error_msg", "Houve um erro durante o salvamento da postagem");
            res.redirect("/admin/postagens");
        });
    }
});

router.get("/postagens/edit/:id", (req, res) => {

    Post.findOne({_id: req.params.id}).populate("category")
    .then(post => {
        Category.find().then(categories => {
            res.render("admin/editpostagens", {post: post, categories: categories});
        })
    }).catch(err => {
        req.flash("error_msg", "Erro ao carregar a pagina de edição!");
        res.redirect("admin/postagens");
    })
});

router.post("/postagens/edit", (req, res) => {
    Post.findOne({_id: req.body.id}).then((post) => {
        post.title = req.body.title
        post.slug = req.body.slug
        post.description = req.body.description
        post.content = req.body.content
        post.category = req.body.category

        post.save().then(() =>{
            req.flash("success_msg", "Post atulizado com sucesso!");
            res.redirect("/admin/postagens");
        }).catch(err => {
            req.flash("error_msg", "Não foi possivel atualizar o registro!");
            res.redirect("/admin/postagens");
        });

    }).catch(err => {
        req.flash("error_msg", "Não foi possivel atualizar!");
        res.redirect("/admin/postagens");
    })
});

module.exports = router