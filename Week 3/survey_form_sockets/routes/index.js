// exports the whole function to be used within other modules
module.exports = function Route(app, server){
    // starts a new socket listening to the defined server
    var io = require('socket.io').listen(server) 
    // get information when the root route is visited and display the index.ejs file
	app.get('/', function(req, res) {
		res.render("index");
    })
    // listens to connection and then it starts the following function
	io.sockets.on('connection', function (socket){
        // the server will listen for the "posting_form" event then execute the following function
	 	socket.on("posting_form", function (data){
            //  created random integer from 1-1000
            var random_number = Math.floor((Math.random() * 1000) + 1);
            // emits  updated message and the random number it just generated to the client/frontend 
		    socket.emit('updated_message', {response: data}); 
			socket.emit('random_number', {response: random_number}); 
		})
	})
};