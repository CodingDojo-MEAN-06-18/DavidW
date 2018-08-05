const Player = require('mongoose').model('Player');
const path = require('path');

module.exports = {
  index(request, response) {
    Player.find(request.body)
    .then(data => {
      response.json(data)
      console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  show(request, response) {
    // console.log(request.params.id)
    Player.findById(request.params.id)
    .then(data => { 
      // console.log('in the show method ..................................................................' )
      // console.log(data);
      response.json(data);
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    console.log('in the create method ..................................................................' )
    Player.create(request.body)
    .then(player => response.json(player))
    .catch(error => response.json(error));
  },
  update(request, response) {
    // console.log('in the update method ..................................................................' )
    Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(player => response.json(player))
    .catch(error => response.json(error));
  },
  destroy(request, response) {
    // console.log('in the delete method ..................................................................' )
    Player.findByIdAndRemove(request.params.id)
      .then(result => {
        // console.log("deleting")
        response.json(result)
      })
      .catch(error => response.json(error));
  },
};


