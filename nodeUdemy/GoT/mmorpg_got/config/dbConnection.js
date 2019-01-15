/*Importar o mongo db*/
/*var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor de banco de dados
            27017, //porta de conexão
            {}
        ),
        {}
    ); // intanciando a classe do mongo

    return db;
}

module.exports = function(){
    return connMongoDB; 
}*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connetion Url
const url = 'mongodb://localhost:27017';

//Data Name
//const dbName = 'teste';

//create a new MongoClient
const client = function(){
    return new MongoClient(url, { useNewUrlParser: true });
}

module.exports = function(){
    return client;
}