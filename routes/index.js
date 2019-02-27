var express = require('express');
var router = express.Router();

function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;

  var url = "mongodb://localhost:27017";

  var client = new MongoClient(url);

  client.connect(function (err) {
    if (err !== null) throw err;

    var db = client.db("dbDogs");
    var dogposts = db.collection("dogposts");

    console.log("Connected!");
    callback(dogposts, client);
  });
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
    text:req.body.text
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
