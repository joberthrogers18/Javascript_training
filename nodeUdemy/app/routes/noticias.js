module.exports = application => {

    application.get('/noticias', (req, res) => {

        var connection = application.config.dbConnection(); // executando a função em dbConnection, que eh passada por parametro e não precisa usando require tendo uma peformace a mais
        var noticiasModel = application.app.models.noticiaModel;

        noticiasModel.getNoticias(connection, function (erro, result){
            
            res.render("noticias/noticias", {noticias: result});
 
        });
   });
};

