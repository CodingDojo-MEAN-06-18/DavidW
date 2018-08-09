const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { Schema } = mongoose; // destructing schema from mongoose

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
        unique: true,
        validate: {
            validator(value) {
              return validator.isEmail(value);
            },
        },
        minlength: 5
    },
    password: {
        type: String, 
        required: [true, "Password is required"],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirm Password is required"],
        minlength: 8
    }
   }, {timestamps: true })

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

// added from lecture
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    bcrypt
      .hash(this.password, 10)
      .then(hashed => {
        this.password = hashed;
        next();
      })
      .catch(next);
  });
  
  userSchema.statics.validatePassword = function(
    candidatePassword,
    hashedPassword
  ) {
    return bcrypt.compare(candidatePassword, hashedPassword);
  };

module.exports = mongoose.model('User', userSchema);