module.exports.exibeNoticias = function(application, req, res){
    var connection = application.config.dbConnection(); // executando a função em dbConnection, que eh passada por parametro e não precisa usando require tendo uma peformace a mais
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (erro, result){
        res.render("noticias/noticias", {noticias: result});
    }); 
}

module.exports.exibeNoticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);

    var idNoticia = req.query; // responsavel por recuperar parametros na url "noticia?idNoticia = 15"

    noticiaModel.getNoticia(idNoticia, (error, result) => {
        console.log(result);
        res.render("noticias/noticia", {noticia : result});
    }); 
}