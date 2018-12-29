/* Para rodar basta usar o comando 'npm run dev', 
que já roda o script com o nodemon que é uma dependencia que já atualiza quando há modificações.
    devDependecies são dependências apenas locais, 
    não sendo mandadas para executar pelo deploy*/ 

const express = require('express'); 

const app = express(); //executando o express

app.get('/', (req, res) => {
    res.send('Hello mano!');
});

app.listen(3001); //aplicação ouvir a porta 3001 do navegador