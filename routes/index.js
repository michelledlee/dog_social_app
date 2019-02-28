var express = require('express');
var router = express.Router();

function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var dbURI = process.env.MONGODB_URI || require("../config/keys.js") || "mongodb://localhost:27017";
  // var url = "mongodb://localhost:27017";

  var client = new MongoClient(dbURI);

  client.connect(function (err) {
    if (err !== null) throw err;

    var db = client.db("dbDogs");
    var dogposts = db.collection("dogposts");

    callback(dogposts, client);
  }, { useNewUrlParser: true });
}

function getAllPosts(callback) {
  connect(function (dogposts, client) {
    dogposts.find({})
      .limit(100)
      .toArray(function (err, docs) {
        if (err !== null) throw err;
        console.log("got " + docs.length + " posts");
        callback(docs);
        client.close();
      });
  });

}

function createPost(c, callback) {
  connect(function (dogposts, client) {
    dogposts.insertOne(c, function (err, result) {
      if (err!==null) throw err;

      callback(result);
    });
  });
}


router.post('/createNewPost', (req, res) => {
  createPost({
    name:req.body.name,
    breed:req.body.breed,
    story:req.body.story
  }, function (result) {

    res.send(result);
  });

});

router.get('/getPosts', (req, res) => {
  getAllPosts((docs) => {
    res.send(docs);
  });
});


module.exports = router;
