module.exports = application => {
    application.get('/noticia', (req, res) => {

        var connection = application.config.dbConnection();
        var noticiaModel = new application.app.models.NoticiasDAO;

        noticiaModel.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", {noticia : result});
        }); 
    });
}