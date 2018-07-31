const mongoose = require('mongoose');  // require loads things synchronously to guarantee its finished
const path = require('path'); //
const fs = require('fs'); // for reading file system. 
const reg = new RegExp ('\\.js$', 'i') //Regular expression. escapes the . to not look for the character but the .js and ends on $ and the i is case insensitive 

const modelsPath = path.resolve('server', 'models'); 
    // goes from root of application directory then goes into server then goes into models directroy
// const modelsPath = path.join(__dirname, '../models');    
    // in case the other one doesnt work above
    // goes to current working directroy then up a directory and then down into models.

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true }); //connects to mongodb and will create it if it doesnt exists
mongoose.connection.on('connected', () => console.log ('Connected to MongoDb')); 
    // listen to (connected) event emiiter and es6 function a message when connected


        // if you are on an older version of mongoose less than version 5....use this below
// mongoose.Promise = global.Promise;   
        // overwrite built in mongoose promise library and you can use this or bluebird or hue....
        // functianilty is the same they all have a then and catch and are context standard


    
    // why do we want synchrnous vs asynchrous.
    // beacuse the models are being depended on by other things we need synchrous to make sure it reads it and not possibly have to wait by xxxx amount of time from the asynch
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));  //needs an absolute path because of modelsPath
    }
});