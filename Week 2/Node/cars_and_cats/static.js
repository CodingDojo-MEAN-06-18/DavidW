const fs   = require('fs');
const path = require('path');

module.exports = function(request, response) {
    // console.log(`Current URL: ${request.url} AND im in the main function loop`)
	fs.exists('.' + request.url, function(exists) {
        // console.log(`Current URL: ${request.url} AND im in fs exists`)
		// if (exists) {
        //     console.log(`Current URL: ${request.url} AND im in the if loop`)
        if (request.url === '/') {
            fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
                response.write(contents);
                response.end();
            });
        } else if (request.url === '/cars') {
            fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
                response.write(contents);
                response.end();
            });
        } else if (request.url === '/cars/new') {
            fs.readFile('./views/add_car.html', 'utf8', function(errors, contents) {
                response.write(contents);
                response.end();
            });
        } else if (request.url === '/cats') {
            fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
                response.write(contents);
                response.end();
            });
            // fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url), function(errors, contents) {
            //     response.write(contents);
            //     response.end();
            // });
        } else {
            response.end("error");
        }
	})
};