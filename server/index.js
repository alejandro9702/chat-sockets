var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'))

app.get('/hola-mundo',function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
})

//abrir conexion al socket// on nos va permitir lanzar eventos
io.on('connection',function(socket){
    // cuando alguien se conectet || detectar la ip del cliente que se ha conectado al socket//
    console.log("el nodo: con IP: "+ socket.hanshake.address+" se ha conectado...");
})
server.listen(6677,function(){
    console.log("servidor esta funcionando en http://localhost:6677");
})
