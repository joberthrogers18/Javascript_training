function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
            collection.find(usuario).toArray(function(err, result){
                if(result[0] !== undefined){
                    req.session.autorizado = true; // se o usuario existi no banco uma variavel de sessão ira ser criada com o nome de autorizado

                    req.session.usuario = result[0].usuario;

                    req.session.casa = result[0].casa;
                }

                var erro = 'Usuario ou senha invalidos';

                if(req.session.autorizado){
                    res.redirect("jogo");
                }
                else{
                    res.render("index", {validacao: {msg: erro}});
                }
            });

            mongoclient.close();
        });
    })
}

module.exports = function(){
    return UsuariosDAO;
}