// invokes mongoose module and assigns it to Schema
const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a new schema that will be exported and used in our database
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
});

// exports the new databse schema model we created
module.exports = mongoose.model('Person', personSchema);