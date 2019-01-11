/* Import config server */
var app = require('./config/server');

//Listen port
var server = app.listen(3000, function(){
    console.log('Servidor is on!');
});

var io = require('socket.io').listen(server);// Ask for the socket io listen in the same port in the server http

app.set('io', io); //the function set from express allow me to create variable with scope global and use this without pass by parameter

/* create connection by websockt */ 

io.on('connection', function(socket){
    console.log('Usuario se conectou!');

    socket.on('disconnect', function(){
        console.log('Usuario se desconectou');
    });

    socket.on('msgParaServidor', function(data){
        /* Dialog */
        socket.emit( // take the message of cliente and pass to cliente again 
            'msgParaCliente',
             {apelido: data.apelido, mensagem: data.mensagem}
        ); // the emit here  is for send the owner of message

        socket.broadcast.emit( // the broadcast work send message for others in the same socket 
            'msgParaCliente',
             {apelido: data.apelido, mensagem: data.mensagem}
        );
        
        /* People in call */
        if(parseInt(data.apelido_atualizado_nos_cliente) == 0){
            socket.emit( 
                'participantesParaCliente',
                {apelido: data.apelido}
            ); 

            socket.broadcast.emit(  
                'participantesParaCliente',
                {apelido: data.apelido, mensagem: data.mensagem}
            );
        }

    });

    
}); // search for action in side of cliente, because we have an instance from io in ejs


