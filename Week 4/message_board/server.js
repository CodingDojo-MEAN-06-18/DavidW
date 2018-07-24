const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const server = app.listen(8000);
var mongoose = require('mongoose');


// Use native promises
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board_db');

const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);

const Comment = mongoose.model("Comment");


/* 
I keep getting the following error and have researched it a bunch and tried to figure it out. used the solution
answers and it didnt change anything so not sure what to do.


TypeError: Cannot use 'in' operator to search for 'useFindAndModify' in true

*/

// var CommentSchema = new mongoose.Schema({
//     name: {type: String, required: [true, "A name is required"], minlength: 4 },
//     content: {type: String, required: [true, "Comments must have content"], minlength: 3}
// }, {timestamps: true});

// var MessageSchema = new mongoose.Schema({
//     name: {type: String, required: [true, "A name is required"], minlength: 4},
//     message: {type: String, required: [true, "Must have a message"], minlength: 3},
//     comment: [CommentSchema]
// }, {timestamps: true});

// mongoose.model('Comment', CommentSchema);
// var Comment = mongoose.model('Comment')

// mongoose.model('Message', MessageSchema);
// var Message = mongoose.model('Message')

// GET '/' Displays the message board.
app.get("/", function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
	      res.render('index', { messages: messages });
	});
});

// adds new message to the db
app.post('/messages/new', function(req, res) {
    var message = new Message({name: req.body.name, message: req.body.message});
    message.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a message!');
            res.redirect('/');
        }
    })
})

// storing a comment but finding it and attaching it to a message as well if valid
app.post('/comments/new/:id', function(req, res) {
    var comment = new Comment({name: req.body.name, message: req.body.message});
    comment.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a comment!');
            Message.update({ _id: req.params.id}, comment, req.body, function(err, result){
                if (err) { 
                    console.log(err); 
                }
                res.redirect('/');
            });
        }
        res.redirect('/');
    })
});
