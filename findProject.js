const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const findArgument = process.argv[2];

mongo.connect(url, (err, db) => {
  const parrotCollection = db.collection('parrots');

 parrotCollection.find({
    "age": { $gt : +findArgument}
  }, { name:1, age:1, _id:0}).toArray(function(err, documents) {
    console.log(documents);
    });

  db.close();
});