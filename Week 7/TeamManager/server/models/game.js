const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
  gameNumber: {
    type: Number,
    unique: true
  },

  activePlayers: {
    type: Object,
    default: []
  },
});

gameSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
module.exports = mongoose.model('Game', gameSchema);