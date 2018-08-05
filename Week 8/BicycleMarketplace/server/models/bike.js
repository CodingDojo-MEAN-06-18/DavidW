const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose; // destructing schema from mongoose

const bikeSchema = new Schema ({
    title: {
        type: String, 
        required: [true, "Title is required"],
        minlength: 3
    },
    description: {
        type: String, 
        required: [true, "Description is required"],
        maxlength: 200
    },
    price: {
        type: Number, 
        required: [true, "Price is required"],
        min: 1
    },
    location: {
        type: String, 
        required: [true, "Location is required"],
        minlength: 5
    },
    imageURL: {
        type: String
    }
   }, {timestamps: true })

bikeSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Bike', bikeSchema);