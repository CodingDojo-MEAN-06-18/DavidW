const Task = require('mongoose').model('Task');
const path = require('path');

module.exports = {
  index(request, response) {
    Task.find(request.body)
    .then(tasks => {
      response.json(tasks)
      // console.log('in the index method ..................................................................' )
    })
    .catch(error => response.json(error));
  },
  show(request, response) {
    // console.log(request.params.id)
    Task.findById(request.params.id)
    .then(tasks => { 
      // console.log('in the show method ..................................................................' )
      // console.log(tasks);
      response.json(tasks);
      // response.redirect('http://localhost:8000/tasks/edit/' + request.params.id, tasks);
      // response.sendFile(path.resolve("/src/app/tasks/task-edit/task-edit.component.html"))
    })
    .catch(error => response.json(error));
  },
  create(request, response) {
    // console.log('in the create method ..................................................................' )
    Task.create(request.body)
    .then(task => response.json(task))
    .catch(error => response.json(error));
  },
  update(request, response) {
    // console.log('in the update method ..................................................................' )
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(task => response.json(task))
    .catch(error => response.json(error));
  },
  destroy(request, response) {
    // console.log('in the delete method ..................................................................' )
    Task.findByIdAndRemove(request.params.id)
      .then(result => {
        // console.log("deleting")
        response.json(result)
      })
      .catch(error => response.json(error));
  },
};


