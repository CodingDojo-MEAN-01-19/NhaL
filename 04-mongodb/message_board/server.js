const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const  port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/message_board",{useNewUrlParser: true}, function(err, db) {
	if (err) {
		console.log("error here:", err);
	}
});

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true, 
        minlength: [3, 'must be 3 or more characters'],
    }, 
    message: {
        type: String,
        required: [true, 'legs is required'],
        minlength: [3, 'must be 3 or more characters'],
    },
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
});

mongoose.model("Message", MessageSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'cannot be blank'],
	},
	text: {
		type: String, 
		required: [true, 'cannot be blank'],
	},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

mongoose.model("Comment", CommentSchema);

const Comment = mongoose.model("Comment");

//routes go below

/* app.get("/", function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
	      res.render('index', { messages: messages });
	});
}); */

app.get('/', function(req, res){
	Message.find({}, function(err, messages){
	  if (err) { console.log(err); }
	  res.render('index', { messages: messages });
	});
  });

app.post("/message", function(req, res){
	var newMessage = new Message({ name: req.body.name, message: req.body.message });
	newMessage.save(function(err) {
		if (err) {
			console.log(err);
			res.render('index', { errors: newMessage.errors });
		} else {
			console.log("success");
			res.redirect('/');
		}
	})
})


app.post("/comment/:id", function(req, res) {
	const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});



app.listen(port, function(){
	console.log("Running on ", port);
});


