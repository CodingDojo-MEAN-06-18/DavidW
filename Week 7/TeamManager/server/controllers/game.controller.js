const Game = require('mongoose').model('Game');
const path = require('path');

module.exports = {
  getAllPlayers(request, response) {
    Game.find(request.body)
    .then(players => {
      response.json(players)
      // console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
//   this should add a player to add players
  activatePlayer(request, response) {
    // console.log('in the create method ..................................................................' )
    Game.activePlayers.add(request.body)
    .then(player => response.json(player))
    .catch(error => response.json(error));
  },

// this should
  deactivatePlayer(request, response) {
    // console.log('in the delete method ..................................................................' )
    Game.findByIdAndRemove(request.params.id)
      .then(result => {
        // console.log("deleting")
        response.json(result)
      })
      .catch(error => response.json(error));
  },
};


