const mongoose = require('mongoose');  // require loads things synchronously to guarantee its finished
const path = require('path'); //
const fs = require('fs'); // for reading file system. 
const reg = new RegExp ('\\.js$', 'i') //Regular expression. escapes the . to not look for the character but the .js and ends on $ and the i is case insensitive 

const modelsPath = path.resolve('server', 'models'); 
mongoose.connect('mongodb://localhost:27017/github-battle', { useNewUrlParser: true }); //connects to mongodb and will create it if it doesnt exists
mongoose.connection.on('connected', () => console.log ('Connected')); 
            
fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));  //needs an absolute path because of modelsPath
    }
});