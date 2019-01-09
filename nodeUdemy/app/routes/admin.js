module.exports = application => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render("admin/form_add_noticia", {validacao: {}, noticias: {}});
    });
    
    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body; // isso só funciona se importar e configurar o body parse la no server, isso apenas em post

        req.assert('titulo', 'Título é obrigatorio !').notEmpty(); //Usa o express validator para validar os campus do formulario no caso é o campo com name titulo
        req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres !').len(10, 100); //validando um tamanho fixo
        req.assert('autor', 'O autor é obrigatorio !').notEmpty();
        req.assert('dataNoticia', 'A data é obrigatória !').notEmpty(); //validando data
        req.assert('noticia', 'A noticia é obrigatoria !').notEmpty();

        var erros = req.validationErrors(); //retorno de um JSON com todos os erros

        console.log(erros); 

        if(erros){ //Verificando se há algum campo invalido, pois se tiver ele apenas retorna e não executa o resto abaixo
            res.render("admin/form_add_noticia", {validacao: erros, noticias: noticia});
            return;
        }

        var connection = application.config.dbConnection(); // executando a função em dbConnection, que eh passada por parametro e não precisa usando require tendo uma peformace a mais
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (erro, result){
            res.redirect("/noticias");
        });
    });
};