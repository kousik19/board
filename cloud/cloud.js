var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection',(socket) =>{
	console.log('User online');
	alert("dasdsad");
	socket.on('canvas-data',(data)=>{
		scoket.broadcast.emit('canvas-data',data);
	})
})
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port,()=> {
	console.log("started on " + server_port);
})