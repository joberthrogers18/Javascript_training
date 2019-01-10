module.exports.initChat = function(application, req, res){
    
    var dataForm = req.body;

    req.assert('apelido', 'O campo não pode ser vazio!').notEmpty();
    req.assert('apelido', 'O campo deve conter entre 3 e 15 caracteres!').len(3,5);

    var errors = req.validationErrors();

    if(errors){
        res.render("index", {errors: errors});
        return;
    }

    res.render("chat", {errors: errors});
}
