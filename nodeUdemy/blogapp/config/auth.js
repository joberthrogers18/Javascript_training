const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Model user
require("../models/User");
const User = mongoose.model("user");


module.exports = function(passport){
    passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
        User.findOne({email: email}).then(user => {
            if(!user){
                return done(null, false, {message: "Esta conta não existe"}); //three parameters: 1 - account data 2- boolean idicate if auteticate happen successfuly 3- message according the happen
            }
            else{
                bcrypt.compare(password, user.password, (erro, check) => {
                    if(check){
                        return done(null, user);
                    }else{
                        return done(null, false, {message: "Senha incorreta"});
                    }
                }); //compare the password and use bcrypt because the cyptography 
            }
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    }) //save the user data in session

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err,user);
        });
    });
}