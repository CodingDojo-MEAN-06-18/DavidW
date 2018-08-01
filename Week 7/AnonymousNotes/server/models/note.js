const mongoose = require('mongoose'); //this remembers every model your require
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose; // destructing schema from mongoose

const noteSchema = new Schema ({
    content: {
        type: String,
        required: [true, 'Provide a note'],
        minlength: 3,
    },
}, 
    {
    timestamps: true // not required but you can add timestamps
});

noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Note', noteSchema);