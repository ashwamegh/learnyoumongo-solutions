const mongo = require('mongodb').MongoClient;

const dbname = 'learnyoumongo';
const url = `mongodb://localhost:27017/${dbname}`;
const collectionName = 'parrots';
const age = process.argv[2];

mongo.connect(url, (err, db) => {
  const collection = db.collection(collectionName);

  collection.count({
    age: { $gt: +age}
  }, (err, data) => {
    if(err) console.log("remove not successful");
    console.log(data);
  })
  db.close();
});