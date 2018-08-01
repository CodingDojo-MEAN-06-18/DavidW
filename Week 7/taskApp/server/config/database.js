const mongoose   = require('mongoose');
const path       = require('path');
const fs         = require('fs');  //file system.... read directroy with models path 
const reg        = new RegExp('\\.js$', 'i');

// const modelsPath = path.join(__dirname, '../models');
const modelsPath = path.resolve('server', 'models'); 

mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});