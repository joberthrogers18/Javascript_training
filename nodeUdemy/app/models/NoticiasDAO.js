function NoticiasDAO(){


}

NoticiasDAO.prototype.getNoticias = (connection,callback) => {
    connection.query('SELECT * FROM NOTICIAS', callback);//Fazendo consulta no banco
}

NoticiasDAO.prototype.getNoticia = (connection,callback) => {
    connection.query('select * from NOTICIAS where idNoticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, connection,callback) => {
    connection.query('insert into NOTICIAS set ?', noticia, callback); // O modulo do mysql ele eh inteligente o bastante pra reconhecer que o insert into table(..) values (...) pode ser substiuido por set e onde tem "?" sera substituido pelo json
} 



module.exports = () => {
    
    return NoticiasDAO;
    
}