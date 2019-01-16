module.exports.jogo = function(application, req, res){
    if(req.session.autorizado == true){
        res.render('jogo');
    }
    else{
        var erro = 'Usuario ou senha invalidos';

        res.render('index', {validacao: {msg: erro}})
    }
}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
        res.reder("index", {validacao: {}});
    }); //Destroy nossa sessão
}