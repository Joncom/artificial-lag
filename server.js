var io = require('socket.io')();
io.on('connection', function(socket){
	console.log('Client connected.');
});
io.listen(3000);
