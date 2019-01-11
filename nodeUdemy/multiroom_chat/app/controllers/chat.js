module.exports.initChat = function(application, req, res){
    
    var dataForm = req.body;

    req.assert('apelido', 'O campo não pode ser vazio!').notEmpty();
    req.assert('apelido', 'O campo deve conter entre 3 e 15 caracteres!').len(3,15);

    var errors = req.validationErrors();

    if(errors){
        res.render("index", {errors: errors});
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido: dataForm.apelido, mensagem: ' acabou de entrar no chat'}
    ); // take by set in app.js and I can recover this by application
    //get() recover the variable io

    res.render("chat", {dataForm: dataForm});
}
