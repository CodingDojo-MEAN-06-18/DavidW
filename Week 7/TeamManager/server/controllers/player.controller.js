const Player = require('mongoose').model('Player');
const path = require('path');

module.exports = {
  index(request, response) {
    Player.find(request.body)
    .then(players => {
      response.json(players)
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    Player.create(request.body)
    .then(player => response.json(player))
    .catch(error => response.json(error));
  },
  update(request, response) {
    // console.log('in the update method ..................................................................' )
    Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(task => response.json(task))
    .catch(error => response.json(error));
  },
  destroy(request, response) {
    Player.findByIdAndRemove(request.params.id)
      .then(result => {
        response.json(result)
      })
      .catch(error => response.json(error));
  },
};


