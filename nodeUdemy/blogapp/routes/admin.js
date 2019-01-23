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
    res.render("admin/addcategorias");
});

router.post('/categorias/nova', (req, res) => {
    var newCategory = req.body;

    new Category(newCategory).save()
    .then(() => {
        console.log('Category was create successful');
    })
    .catch(err => {
        console.log('Error to create new categorie: ' +  err);
    }) // save in mongodb
});

router.get('/categorias', (req, res) => {
    res.render("admin/categorias");
});

module.exports = router