//                                          PROJECT LAYOUT
/* <project name> 
    public
        index.html
    server
        config
            routes
                author.routes.js
                book.routes.js
                index.js
            database.js
        controllers                you can do the same with controllers as routes
            authors.js
            books.js
        models (plural)
            author.js (singular)
            book.js
    views
        authors
            edit.ejs
            index.ejs
            new.ejs
            show.ejs
        books
            edit.ejs
            index.ejs
            new.ejs
            show.ejs
    package-lock.json
    package.json
    .gitignore
        /node_modules
        etc.
    server.js
*/


//      Server                                                          <project_name>/server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// brings in our database
require('./server/config/database')
// brings in routes and passes in app to use at those routes
app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`Listening on port: ${ port }`))


//      Models(M)                                               <project_name>/server/models/AUTHOR.JS 
const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    
    module.exports = mongoose.model('Author', authorSchema); 

//      Models(M)                                               <project_name>/server/models/BOOKS.JS 
    //      same thing for books as above

                                        
                                        
//     Database                                              <project_name>/server/config/DATABASE.JS 

const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// reg ex expression to find js file at the end with case insensitive.
//       \\ = escapes .  $ = end of file, 'i' = case insensitive 
const reg = new RegExp('\\.js$', 'i');

// absolute path to models folder under server folder
const modelsPath = path.resolve('server', 'models')

// overides promise package and gets rid of Deprecation warning
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:authorsandbooks')
mongoose.connection.on('connected', () => console.log('connected to mongoDB'))

// file system reads the path we defined in models path and each file in it (forEach) does the function
fs.readdirSync(modelsPath).forEach(file => {
    // if the file passes our regExp test we made then require that file that we attached to our models path
    if(reg.test(file)) {
        require(path.join(modelsPath, file))
    }
});

//     routes                                              <project_name>/server/config/routes/author.routes.JS 
// Resource based routing RESTful 

const authorController = require('../../controllers/authors');
const router = require('express').Router();
// replaced app with router so we handle the Router that was being done internally with .get/post

router.get('/', authorController.index);
router.get('/new', authorController.new);
router.post('/', authorController.create);
router.get('/:id', authorController.show);
router.get('/:id/edit', authorController.edit);
router.post('/:id/update', authorController.update);
router.get('/:id/delete', authorController.delete);

module.exports = router;

//     Routes                                         <project_name>/server/config/routes/book.routes.JS 
// Resource based routing RESTful 
// would do the same thing for book

//     Routes                                          <project_name>/server/config/routes/index.js

const router = require('express').Router();

module.exports = router
    // defines route to mount authors/books (bodyparser mounted)
    .use('/authors', require('./author.routes'))
    .use('/books', require('./book.routes'));




//  Handlers(C)                                             <project_name>/server/controllers/AUTHOR.JS 

const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');


module.exports = {
    index(request, response) {
        Author.find({})
        .populate('books')
        .then(authors => response.render('authors/index', { authors }))
        .catch(console.log);
    }, 
    show(request, response) {
    }, 
    edit(request, response) {}, 
    new(request, response) {
        response.render('authors/new');
    }, 
    update(request, response) {},
    create(request, response) {
        Author.create(request.body)
        .then(author => {
          console.log('created author', author);
          response.redirect('/authors');
        })
        .catch(error => {
          const errors = Object.keys(error.errors)
            .map(key => error.errors[key].message)
    
          response.render('authors/new', { errors });
        })
    }, 
    destroy(request, response) {},  
}

//  Handlers(C)                                              <project_name>/server/controllers/BOOKS.JS 
    // Same thing for books