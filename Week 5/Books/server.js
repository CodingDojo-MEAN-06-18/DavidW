const express = require("express");     // Load the express module and store it in the variable express
const path = require('path');           // bring in path
const bodyParser = require('body-parser');     // bring in body-parser
const port = process.env.PORT || 8000;  // grab for all our environments or set up port 8000
const app = express();                  // invoke express and store the result in the variable app

// not required but helps 
// yarn add morgan or npm i -S morgan??? its a logger....
const logger = require('morgan');

// require database configurattion in relative path form
require('./server/config/database');

// load middlewear
app.use(bodyParser.urlencoded({ extended: true }))                  // with its urlencoded we can extend true      
    .use(bodyParser.json())                                         // you can chain off of app.use if you want
    .use(express.static(path.join(__dirname, 'dist/Books')))       // helps us serve static files and will be all of our angular files when we are done
        // __dirname => absolute path to the current working directory;
        // change angular.json file  "outputPath": "dist/xxxx" => ""outputPath": "dist/public"
        .use(logger('dev'))                                             // needs some sort of formatting so development formatting is what we use
        .use('/api', require('./server/routes'))
        // gonna reference route directoy that only has one mounted now but will have all of them
        // utilzer as if it were middle wear now
        // want to us '/api/v1' or '/api/v2' for version numbers
        .use(require('./server/routes/catch-all.route')); // dont mount on path you want it to match everything that doesnt match on the line above 
    

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(port, () => console.log(`Express server listening on port: ${port}`));