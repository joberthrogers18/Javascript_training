function NoticiasDAO(connection){

    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function(callback){
    
    this._connection.query('SELECT * FROM NOTICIAS', callback);//Fazendo consulta no banco
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from NOTICIAS where idNoticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    console.log(noticia);
    this._connection.query('insert into NOTICIAS set ?', noticia, callback); // O modulo do mysql ele eh inteligente o bastante pra reconhecer que o insert into table(..) values (...) pode ser substiuido por set e onde tem "?" sera substituido pelo json
} 



module.exports = () => {
    
    return NoticiasDAO;
    
}
