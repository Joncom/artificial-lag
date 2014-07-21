var io = require('socket.io')();
var ping_start_time;
io.on('connection', function(socket){
	console.log('Client connected.');

	// Send initial ping request.
	ping(socket);

	// Receive ping response.
	socket.on('pong', function() {

		// Calculate latency
		var current_time = new Date().getTime();
		var latency = current_time - ping_start_time;
		console.log(latency);

		// Wait a moment and then ping again.
		setTimeout(function(){
			ping(socket);
		}, 1000);
	});
});
io.listen(3000);

function ping(socket) {
	ping_start_time = new Date().getTime();
	socket.emit('ping');
}
