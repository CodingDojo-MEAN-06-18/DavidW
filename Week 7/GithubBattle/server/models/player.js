const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose; // destructing schema from mongoose

const playerSchema = new Schema ({
    name: {
        type: String, 
        required: [true, "Name is required"]
    },
    score: {
        type: Number, 
        required: [true, "Score is required"]
    },
    pic: {
        type: String, 
        required: [true, "Pic is required"]
    } 
   }, {timestamps: true })

playerSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Player', playerSchema);