const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Load user model
require("../models/User");
const User = mongoose.model("user");

//bcrypt
const bcrypt = require("bcryptjs"); // this is for encripted the password

router.get("/registro", (req, res) => {
    res.render("usuarios/registro");
});

router.post("/registro", (req, res) => {
    var errors = []

    if(!req.body.name || req.body.name == null || typeof req.body.name == undefined){
        errors.push({text: "O nome é inválido"});
    }

    if(!req.body.email || req.body.email == null || typeof req.body.email == undefined){
        errors.push({text: "E-mail inválido!"});
    }

    if(!req.body.password || req.body.password == null || typeof req.body.password == undefined){
        errors.push({text: "Senha inválida!"});
    }

    if(req.body.password.length < 4){
        errors.push({text: "Senha muito curta!"});
    }

    if(req.body.password !== req.body.password2){
        errors.push({text: "A senhas precisam ser iguais!"});
    }

    if(errors.length > 0){
        res.render("usuarios/registro", {errors: errors});
    }else{
        User.findOne({email: req.body.email}).then((user) => {
           
            if(user){
                req.flash("error_msg", "Esse email já existe, tente novamente!");
                res.redirect("/usuarios/registro");
            }
            else{
                
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                
                bcrypt.genSalt(10,(err, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if(error){
                            req.flash("error_msg", "Houve um erro durante o salvamento do usuario");
                            res.redirect("/");
                        }
                        else{
                            newUser.password = hash;

                            newUser.save().then(() => {
                                req.flash("success_msg", "Usuário cadastrado com sucesso");
                                res.redirect("/");
                            }).catch(err => {
                                req.flash("error_msg", "Houve um erro interno ao cadastrar o usuario!");
                                res.redirect("/usuarios/registro");
                            })
                        }

                    }) //get hash in password and better the crpyto
                }); // encriptar a senha
            
            }
           
        }).catch(err => {
            req.flash("error_msg", "Houve um erro interno ao cadastrar o usuario!");
            res.redirect("/");
        });
    }
});

module.exports = router;