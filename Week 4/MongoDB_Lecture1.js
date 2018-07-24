//created const variable from mongoose module
const mongoose = require('mongoose');

// "Destructuring" s the same as saying....
// const Schema = mongoose.Schema
const { Schema } = mongoose;

// connected us to mongoDB animals database (if there isnt the database yet it will create it)
mongoose.connect('mongodb://localhost/animals');

// once the connection to the database is established it will log the message
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));


// schema for animal that will be the model in our animals database
const animalSchema = new Schema ({
    // name is a more detailed options object
    name: {
        type: String,
        // makes this path/field required and provides a custom message
        required: [true, "Please provide an animal name"],
        // trims off white space characters    'jason      ' => 'jason'
        trim: true
    },
    age: Number,
    // creates a option object for legs with a required field attached with a custom message if failed and a min amount of legs
    legs: {
        type: Number,
        required: [true, "Give me legs!"],
        min: [0, "I need more legs"]
    },
    // sets eatsPeople to false unless passed in as true later
    eatsPeople: {
        type: Boolean,
        default: false
    }
    // you can add an options opject to the schema itself and you can pass it timestamps true
    //  moment? is the date library name he mentioned for formatting data. angular works well to clean it up too 
}, {
    timestamps: true,
});

// collection => animals (in MongoDb in makes it singular for you)
const Animal = mongoose.model('Animal', animalSchema)

// created new animal 
const animal = new Animal( {
    name: 'Fox',
    age: 3,
    legs: 4,
    eatPeople: false
});

//                                              1. version using es5   
// errors get passed first in a node based environment
// ___underscores are private
animal.save(function(error, animal) {
    // console.log(error, animal)
    if (error) {
        throw error 
    } else {
        //handle the data after you save the new model to the database
    }
})

//                                              2.Promise version 
// console.log(animal.save());
/* <Promise Pending>  is what you would see in the output so we have to use the rest of promises*/ 

animal.save()
    .then(animal => {
        //when succesful execute the following...
        // console.log(animal)
    })
    .catch(error => {
        // 1. 
        //handle error if not sucessful 
        // console.log(errors)
        // console.log(error.errors.name.message)
        const errors = [];
        // invoke and pass in object (error.errors) to find the keys in the object
        const keys = Object.keys(error.errors)

        for (let index = 0; index < keys.length; index++) {
            // would get key name
            console.log(keys[index])
            // would get the certain key message
            console.log(error.errors[keys[index]].message)
            // pushes the errors in the array to pass later
            errors.push(error.errors[keys[index]].message)
        }

        // 2.
        // alternate methods with the same function 
        const errors = [];
        Object.keys(error.errors)
        // for each element of the array do something
            .forEach(key => {
                // this will push the message 
                errors.push(error.errors[key].message)
            })

        // 3.
        // best method to use for same functionality 
        // makes an array of the fields the failed attached with their messages
        const errors = Object.keys(error.errors)
            .map(key => {
                return error.errors[key].message;
            });
        

        // 4.
        // best method to use for same functionality 
            // es6 implicit returns for simple statements so they dont need:
            // a function body, return statement or curly braces
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message);

            console.log('errors', errors)
            // how you would pass in the errors in express
            // response.render('errorPage', {errors});
    })



    animal.save()
        .then(animal => {
        //when succesful execute the following...
        // console.log(animal)
        })
        .catch(error => {
            const errors = Object.keys(error.errors)
            .map(key => error.errors[key].message);
            response.render('errorPage', {errors});
    });