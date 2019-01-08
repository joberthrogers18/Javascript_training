module.exports = application => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
    
    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body; // isso só funciona se importar e configurar o body parse la no server, isso apenas em post

        var connection = application.config.dbConnection(); // executando a função em dbConnection, que eh passada por parametro e não precisa usando require tendo uma peformace a mais
        var noticiasModel = new application.app.models.NoticiasDAO;

        noticiasModel.salvarNoticia(noticia, connection, function (erro, result){
            res.redirect("/noticias");
        });
    });
};