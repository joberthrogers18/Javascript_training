var mysql = require('mysql'); //importando mysql instalado pelo npm

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'winterfell',
        database: 'PORTALNOTICIAS'
    }); //estabelecendo a conexão com o banco de dados
}