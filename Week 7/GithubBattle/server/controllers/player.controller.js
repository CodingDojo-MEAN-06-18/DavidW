const Player = require('mongoose').model('Player');
const path = require('path');

module.exports = {
  index(request, response) {
    Player.find(request.body)
    .then(data => {
      response.json(data)
    //   console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    // console.log('in the create method ..................................................................' )
    Player.create(request.body)
    .then(player => response.json(player))
    .catch(error => response.json(error));
  },
};


