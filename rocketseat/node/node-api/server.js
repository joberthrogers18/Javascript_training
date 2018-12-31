/* Para rodar basta usar o comando 'npm run dev', 
que já roda o script com o nodemon que é uma dependencia que já atualiza quando há modificações.
    devDependecies são dependências apenas locais, 
    não sendo mandadas para executar pelo deploy*/ 

const express = require('express'); 
const mongoose = require('mongoose');
//importar diversos arquivos de uma pasta
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express(); //executando o express
app.use(express.json()); //Enviando com post em formato json
app.use(cors()); //dominios que eu quero permiti acesso

//Iniciando o DataBase
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser : true},
);

//RequireDir importa todos os arquivos que estao na pasta models
requireDir('./src/models');

//Importando a rota /
app.use('/api', require('./src/routes'));

app.listen(3001); //aplicação ouvir a porta 3001 do navegador