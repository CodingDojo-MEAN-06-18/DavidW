// requires some modules and established variables for counter, app, path, server and socket
const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
let counter = 0;

// load static html document
app.use(express.static(path.join(__dirname, "./views")));

// when the socket connection occurs a serious of functions can occur
io.on('connection', function (socket) {
    console.log("Socket Connected");

    // when the button is clicked it updates the count and emits the response with updated counter
    // to ALL connections on socket
    socket.on('buttonClicked', function() {
        counter++;
        io.emit('updateMessage', counter);
    });

    // when the reset button is clicked it updates the count to 0 and emits the response 
    // with updated counter to ALL connections on socket
    socket.on('resetClicked', function() {
        counter = 0;
        io.emit('updateMessage', counter);
    }); 

    // emits the current count to each new socket connection
    socket.emit('updateMessage', counter);
});