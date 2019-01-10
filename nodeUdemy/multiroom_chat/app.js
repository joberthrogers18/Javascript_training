/* Import config server */
var app = require('./config/server');


//Listen port
app.listen(3000, function(){
    console.log('Servidor is on!');
});