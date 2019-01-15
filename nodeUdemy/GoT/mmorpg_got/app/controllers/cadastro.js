module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('nome', 'O campo nome não pode ser vazio!').notEmpty();
    req.assert('usuario', 'O campo do usuário não pode ser vazio!').notEmpty();
    req.assert('senha', 'O campo da senha não pode ser vazia!').notEmpty();
    req.assert('casa',  'O campo das casas não pode está vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao : erros, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;
    console.log(connection)
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inseriUsuario(dadosForm);

    res.send('podemos cadastrar');
}