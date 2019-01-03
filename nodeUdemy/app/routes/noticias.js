var dbConnection = require('../../config/dbConnection'); //apenas importando a função sem executar

module.exports = app => {

    var connection = dbConnection(); // executando a função de dbConnection em config;

    app.get('/noticias', (req, res) => {


        connection.query('SELECT * FROM NOTICIAS', function (erro, result){
            
            res.render("noticias/noticias", {noticias: result});
 
        });//Fazendo consulta no banco

   });
};

