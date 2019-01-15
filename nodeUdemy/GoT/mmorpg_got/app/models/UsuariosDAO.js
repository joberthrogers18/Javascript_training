function UsuariosDAO(connection){
   this._connection = connection(); // a função do wrapper no dbConnetion retorna os dados de conexão com o mongodb
}

UsuariosDAO.prototype.inseriUsuario = function(usuario){    
    /*this._connection.open(function(err, mongoClient){
        mongoClient.collection("usuarios", function(err, collection){ // O open retorna uma função de callback e a parti dai eu pego o resultado e consigo manipular atraves do collentopn 
                                                                        // O primeiro parametro eh a collection que desejo manipular e a segunda eh um função callback com a tratativa
            collection.insert(usuario); //insere no db
        });
    }); // Com o open que se faz as tratativas dentro do db*/

 /*   this._connection.connect('mongodb://localhost/got', function(err, db) {
        db.collections('Usuario').insertOne(usuario);
    }); */
        // Insert a single document
    
    this._connection.connect(function(err, client) {
        console.log("Connected correctly to server");
        
        const db = client.db('got');

        db.collection('usuarios').insertOne(usuario, function(err, r){
            client.close();
        });
        
    });
}    

module.exports = function(){
    return UsuariosDAO;
}
