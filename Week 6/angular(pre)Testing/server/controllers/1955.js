// stores a const of the person model in our MongoDb with mongoose
const Person = require('mongoose').model('Person');

// exports a serious of functions linked with keys for CRUD methods but no update at this time 
module.exports = {
    // displays all users born in 1955 and for now we havent created a year template.... but that 
    // search would be added in the params of the find method to get all those people
  index(request, response) {
    Person.find({})
      .then(people => response.json(people))
      .catch(error => response.json(error));
  },
//   R - Read
  show(request, response) {
    Person.findOne(request.params)
      .then(person => {
        response.json(person ? person : 'No such person existed in 1955!!');
      })
      .catch(error => response.json(error));
  },
//   C- Create
  create(request, response) {
    Person.create(request.params)
      .then(person => response.json(person))
      .catch(error => response.json(error));
  },
//   D-Delete
  destroy(request, response) {
    Person.remove(request.params)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};