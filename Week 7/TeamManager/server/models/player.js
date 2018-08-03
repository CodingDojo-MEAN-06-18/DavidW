const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is Required'],
    minlength: [2, 'Player length must be greater than 2'],
    unique: true
  },
  position: {
    type: String,
    trim: true,
    default: ''
  },
  status: { 
    type: [Number], 
    default: [0, 0, 0] },
  },
{
  timestamps: true
});

playerSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Player', playerSchema);