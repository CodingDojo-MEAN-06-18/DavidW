//barreling and using modular routing

const bookRoute = require('./book.routes') //relative routing
const router = require('express').Router();

module.exports = router.use('books', bookRoute) // mount the book route on a particular path/prefix 
    // merge /books with all the other routes we created in book.routes.js like /books/:book_id