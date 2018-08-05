const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose; // destructing schema from mongoose
// import { bikeSchema } from './bike';

const userSchema = new Schema ({
    firstName: {
        type: String, 
        required: [true, "firstName is required"],
        minlength: 3
    },
    lastName: {
        type: String, 
        required: [true, "lastName is required"],
        minlength: 3
    },
    email: {
        type: String, 
        required: [true, "Email is required"],
        minlength: 5
    },
    password: {
        type: String, 
        required: [true, "Password is required"],
        minlength: 8
    },
    bikes: {
        type: Object,
    }
    // bikes: {
    //     type: Array<bikeSchema>,
    // }
   }, {timestamps: true })

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('User', userSchema);