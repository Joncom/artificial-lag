var io = require('socket.io')();
var ping_start_time;
io.on('connection', function(socket){
	console.log('Client connected.');

	ping(socket);

	socket.on('pong', function() {

		// Calculate latency
		var current_time = new Date().getTime();
		var latency = current_time - ping_start_time;
		console.log(latency);

		ping(socket);
	});
});
io.listen(3000);

function ping(socket) {
	ping_start_time = new Date().getTime();
	socket.emit('ping');
}
