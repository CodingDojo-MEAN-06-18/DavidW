const Bike = require('mongoose').model('Bike');
const path = require('path');

module.exports = {
  index(request, response) {
    Bike.find(request.body)
    .then(data => {
      response.json(data)
    //   console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    // console.log('in the create method ..................................................................' )
    Bike.create(request.body)
    .then(bike => response.json(bike))
    .catch(error => response.json(error));
  },
};
