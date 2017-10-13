const mongo = require('mongodb').MongoClient;

const dbname = process.argv[2];
const url = `mongodb://localhost:27017/${dbname}`;
const collectionName = process.argv[3];
const id = process.argv[4];

mongo.connect(url, (err, db) => {
  const collection = db.collection(collectionName);

  collection.remove({
    _id: id
  }, (err, data) => {
    if(err) console.log("remove not successful");
    console.log(data);
  })
  db.close();
});