const Note = require('mongoose').model('Note');
const path = require('path');

module.exports = {
  index(request, response) {
    Note.find(request.body)
    .then(notes => {
      response.json(notes)
      // console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  show(request, response) {
    // console.log(request.params.id)
    Note.findById(request.params.id)
    .then(notes => { 
      // console.log('in the show method ..................................................................' )
      // console.log(notes);
      response.json(notes);
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    // console.log('in the create method ..................................................................' )
    Note.create(request.body)
    .then(note => response.json(note))
    .catch(error => response.json(error));
  },
  update(request, response) {
    // console.log('in the update method ..................................................................' )
    Note.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(note => response.json(note))
    .catch(error => response.json(error));
  },
  destroy(request, response) {
    // console.log('in the delete method ..................................................................' )
    Note.findByIdAndRemove(request.params.id)
      .then(result => {
        // console.log("deleting")
        response.json(result)
      })
      .catch(error => response.json(error));
  },
};


