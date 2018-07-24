const API_1955_Controller = require('../controllers/1955');

// different routes used RESTful 
module.exports = function(app) {
  app.get('/', API_1955_Controller.index);
  app.get('/new/:name', API_1955_Controller.create);
  app.get('/remove/:name', API_1955_Controller.destroy);
  app.get('/:name', API_1955_Controller.show);
};