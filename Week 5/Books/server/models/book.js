const mongoose = require('mongoose'); //this remembers every model your require
const { Schema } = mongoose; // destructing schema from mongoose

const bookSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'provide a book title'],
        trim: true,
    },
    pages: {
        type: Number,
        min: 1,
        required: true,
    },
    publisher: String,
    year: Number,
    author: {
        type: String,
        required: true,
        trim: true,
    }
}, 
    {
    timestamps: true // not required but you can add timestamps
});

// match this content above with your class in book.ts file in your angular app.



// make this available outside this file.
// when we require this file somewhere this will bring it into the memory
// register this with mongoose through the model method and give it book and the schema
module.exports = mongoose.model('Book', bookSchema)