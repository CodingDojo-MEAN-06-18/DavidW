const API_1955_Controller = require('../controllers/1955');
const AppComponent = require('../../public/src/app')
// import { AppComponent} from '../../public/src/app/app.module'; 
// const Angular = require('../../src/app/index.html')

// different routes used RESTful 
module.exports = function(app) {
  app.get('/', AppComponent);
  app.get('/new/:name', API_1955_Controller.create);
  app.get('/remove/:name', API_1955_Controller.destroy);
  app.get('/:name', API_1955_Controller.show);
  // app.get('/angular', API_1955_Controller.show);
};