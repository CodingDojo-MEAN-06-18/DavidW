const Bike = require('mongoose').model('Bike');
const path = require('path');

module.exports = {
    // gets all the bikes in mongodb
    index(request, response) { 
        Bike.find(request.body)
        .then(data => {
            response.json(data)
        })
        .catch(error => response.json(error));
    },
    // creates a new back stored in mongodb
    create(request, response) {
        Bike.create(request.body)
        .then(bike => response.json(bike))
        .catch(error => response.json(error));
    }, 
//   show(request, response) {
//     Bike.findById(request.params.bike_id)
//       .then(bike => response.json(bike))
//       .catch(console.log);
//   },
    // update single resource
    update(request, response) {
        Bike.findByIdAndUpdate(request.params.bike_id, request.body, { new: true })
        .then(bike => response.json(bike))
        .catch(console.log);
    },
    // destroy single resource
    destroy(request, response) {
        Bike.findByIdAndRemove(request.params.bike_id)
        .then(bike => response.json(bike))
        .catch(console.log);
    },
};


