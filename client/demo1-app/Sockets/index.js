var express = require('express');
var app =express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){

    console.log("Done");
})

server.listen(3001,function(){
    console.log("Connection to server");

})



