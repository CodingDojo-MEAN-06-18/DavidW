// requires the model and one resource and the resource is book...
// requires mongoose and then the book off of it
const Book = require('mongoose').model('Book');   // reads this once and stores it in memory

// exports a serious of functions linked with keys for CRUD methods but no update at this time 
module.exports = {
    // get all of a particular resource
    index(request, response) { 
        Book.find({}) //find all books
            .then(people => response.json(people)) // on success gives an array of books and responds in json
            .catch(error => response.json(error)); // on failure sends errors in json (you can you full error map catch method find it....)
    },
    //   C- Create resource 
    create(request, response) {
        Book.create(request.body) // since we match information in our angular field/model we can pass in request.body
            .then(book => response.json(book)) // singular book object we can send back in json
            .catch(error => { // map an array of strings of the fields that field and gets the key one at a time and turn it into a error message in a new array  as strings and send it back 
                response
                    .status(500) // send response error find the correct error number for each error
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                );
            }); 
    },  
    //   R - Read or get a single resource
    show(request, response) {
        Book.findById(request.params.book_id) // find singular resource by id from paramaters and define it as book_id and that will be in routing
        .then(book => {response.json(book);
        })
        .catch(error => response.json(error));
    },
    // update a resource 
    update(request, response) {
        Book.findByIdAndUpdate(request.params.book_id, request.body, {new: true})
        // request.params.book_id finds the object by id
        // request.body content of the book/object you want to update
        // if you want the old object do not add {new: true}
        // if you need the new object you need to specify you want the new option add {new: true}
        .then(book => response.json(book)) // singular book object we can send back in json
        .catch(error => { // map an array of strings of the fields that field and gets the key one at a time and turn it into a error message in a new array  as strings and send it back 
            response
                .status(500) // send response error find the correct error number for each error
                .json(
                    Object.keys(error.errors).map(key => error.errors[key].message)
            );
        }); 
    },
    //   D-Destroy/Delete a resource  (destroy is a rails thing...)
    destroy(request, response) {
        Book.findByIdAndRemove(request.params.book_id)
        .then(result => response.json(book))
        .catch(error => response.json(error));
    },
};