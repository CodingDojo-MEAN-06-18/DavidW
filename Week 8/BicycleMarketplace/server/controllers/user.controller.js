const User = require('mongoose').model('User');
const path = require('path');

module.exports = {
  index(request, response) {
    User.find(request.body)
    .then(data => {
      response.json(data)
    //   console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    // console.log('in the create method ..................................................................' )
    User.create(request.body)
    .then(user => response.json(user))
    .catch(error => response.json(error));
  },
};


