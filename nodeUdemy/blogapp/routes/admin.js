const express = require("express");
const router = express.Router()
const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model('category');

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
            allErrors += "*" + errors[i].text ;
        }

        console.log(allErrors)

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

module.exports = router