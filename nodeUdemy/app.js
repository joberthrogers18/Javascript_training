var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');
rotaFormularioInclusaoNoticias(app);

app.listen(3000, () => {
    console.log("Servidor rodando com express");
});