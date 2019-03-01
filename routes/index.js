var express = require("express");
var router = express.Router();
var objectId = require("mongodb").ObjectID;

// Nice job. New posts are added smoothly and voting happens almost instantaneously. 
function connect(callback) {
	var MongoClient = require("mongodb").MongoClient;

	var dbURI =
		process.env.MONGODB_URI ||
		require("../config/keys.js") ||
		"mongodb://localhost:27017";

	var client = new MongoClient(dbURI);

	client.connect(
		function(err) {
			if (err !== null) throw err;

			var db = client.db("dbDogs");
			var dogposts = db.collection("dogposts");

			callback(dogposts, client);
		},
		{ useNewUrlParser: true }
	);
}

function getAllPosts(callback) {
	connect(function(dogposts, client) {
		dogposts
			.find({})
			.limit(100)
			.toArray(function(err, docs) {
				if (err !== null) throw err;

				callback(docs);
				client.close();
			});
	});
}

function createPost(c, callback) {
	connect(function(dogposts, client) {
		dogposts.insertOne(c, function(err, result) {
			if (err !== null) throw err;

			callback(result);
		});
	});
}

function updateVotes(c, callback) {
	console.log(c);
	
	connect(function(dogposts, client) {
		dogposts.updateOne({_id: objectId(c.id)}, {$set: {"votes": c.votes}}, function(err, result) {
			if (err !== null) throw err;
			callback(result);

			client.close();
		});
	});
}

router.post("/createNewPost", (req, res) => {
	createPost(
		{
			name: req.body.name,
			breed: req.body.breed,
			story: req.body.story,
			votes: 0
		},
		function(result) {
			res.send(result);
		}
	);
});

router.put("/updateVotes", (req, res) => {
	console.log("updateVotes in back end");

	updateVotes(
			{
				id: req.body.id,
				votes: req.body.votes
			},
	function(result) {
		res.send(result);
		}
	);
});



router.get("/getPosts", (req, res) => {
	getAllPosts(docs => {
		res.send(docs);
	});
});

module.exports = router;
