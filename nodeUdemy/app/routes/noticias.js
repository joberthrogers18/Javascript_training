module.exports = application => {

    application.get('/noticias', (req, res) => {
        application.app.controllers.noticias.exibeNoticias(application, req, res);
   });

   application.get('/noticia', (req, res) => {
        application.app.controllers.noticias.exibeNoticia(application, req, res);
    });
};

