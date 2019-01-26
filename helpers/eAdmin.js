module.exports = {
    eAdmin: function(req, res, next){
        if(req.isAuthenticated() && req.user.isAdmin == 1){ //user is a variable global
            return next();
        }
        else{
            req.flash("error_msg", "Você precisa ser um Admin!");
            res.redirect("/");
        }
    }
}