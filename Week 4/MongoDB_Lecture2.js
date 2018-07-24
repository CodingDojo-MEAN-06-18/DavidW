// all requirements we are bringing in and storing
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// sets up port
const port = process.env.PORT || 8000;

// extract Schema with mongoose
const { Schema } = mongoose;

// invokes our express const we made requried from express module and stored it in app
const app = express();

// set up express environment to use ejs
app.set('view engine', 'ejs');
// views directory with our templates set by path.resolve
app.set('views', path.resolve('views'));

// 
app.use(bodyParser.urlencoded({ extended: true }));

// connects mongoose with our database that we set ---> authors_books
// make sure your write ':27017' (deprecation warning if not)
mongoose.connect('mongodb://localhost:27017/authors_books');
// logs message once connected
mongoose.connection.on('connected', () => console.log('MongoDB connected'));


/* author schema (model for DB basically)
  fields: 
    name (required and validations)
    isAlive (default true unless established false)
    books (array from books schema)
*/
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});


/* book schema (model for DB basically)
  fields: 
    title (required and validations)
    author (author schema attached _ID)
    pages (required and validations)
    year (not required)

*/
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
  year: Number,
});

// established Author and Book const Variables using mongoose to set the schema model in our MongoDB 
const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

// Resource based routing RESTful 

// root route with handler of request and response and response handles the rendering of index.ejs
app.get('/', function (_request, response) {
  response.render('index');
});

// /authors gets all of authors 
app.get('/authors', function (_request, response) {
    // searches authors model with no object restriction
  Author.find({})
    // populates (attaches basically) from the books model associated with authors
    .populate('books')
    // once promise goes through render authors directory index.ejs
    // dont use /authors with / with not looking at the root of all of authors...
    .then(authors => response.render('authors/index', { authors }))
    // if it fails... console log everything but normally would do error handling here...
    .catch(console.log);
})

// once route is hit for get it will render the authors directory new.ejs file with form for creating an authro
app.get('/authors/new', function (_request, response) {
  response.render('authors/new');
});

// create method at /authors route and redirects on success or throws errors and re renders the page just on with errors
app.post('/authors', function (request, response) {
  Author.create(request.body)
    .then(author => {
      console.log('created author', author);
      response.redirect('/authors');
    })
    .catch(error => {
      const errors = Object.keys(error.errors)
        .map(key => error.errors[key].message)

      response.render('authors/new', { errors });
    //   on ejs file is typeOf Errors !== undefined? is what i think he said
    })
});

// finds books and renders all the books from the book directory index.ejs file
// passes books var to use on template and attaches authors from .populate
app.get('/books', function (_request, response) {
  Book.find({})
    // populate field/path in Book model that we set up to be attached to another model we are looking for
    .populate('author')
    .then(books => response.render('books/index', { books }))
    .catch(console.log);
});

// once route is hit for get it will render the books directory new.ejs file with form for 
// creating a new book and passing authors we found 
app.get('/books/new', function (request, response) {
  Author.find({})
    .then(authors => response.render('books/new', { authors }))
    .catch(console.log);

});

app.post('/books', function (request, response) {
    // creates book
  Book.create(request.body)
    // once created it finds the author attached to that book and returns it
    .then(book => {
      console.log('created book', book);

      return Author.findById(book.author)
    //   then pushes the book into the authors book field array 
        .then(author => {

          author.books.push(book.id);

          return author.save()
        })
        // then redirects back to books once the author and books models have been updated and saved
        .then(() => response.redirect('/books'));
    })
    // if any of those steps failed this will catch the errors and display them at books directory new.ejs 
    .catch(error => {
      const errors = Object.keys(error.errors)
        .map(key => error.errors[key].message)

      response.render('books/new', { errors });
    })
});

//listens and waits till the app connects the port and logs our personal message we set
app.listen(port, () => console.log(`Express server listening on port ${port}`));