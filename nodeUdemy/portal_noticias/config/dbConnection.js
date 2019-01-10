var mysql = require('mysql'); //importando mysql instalado pelo npm

var connMysql =  function(){  //Esse metodo de guarda essa função em uma variavel se chama wrapper e evita de que haja uma requisição oa bd a cada vez que carregue novamente e dando mais liberdade para usar essa conexão so quando precisar
    console.log('A conexão foi com o db foi estabelecida');
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'winterfell',
        database: 'PORTALNOTICIAS'
    }); //estabelecendo a conexão com o banco de dados
}

module.exports = function(){
    return connMysql;
}