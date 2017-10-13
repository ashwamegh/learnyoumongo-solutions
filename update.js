const mongo = require('mongodb').MongoClient;

const dbname = process.argv[2];
const url = `mongodb://localhost:27017/${dbname}`;

mongo.connect(url, (err, db) => {
  const usersCollection = db.collection('users');

  usersCollection.update({username: "tinatime"}, {
    $set: {
      age: 40
    }
  }, (err, data) => {
    console.log(data);
  })

  db.close();
});