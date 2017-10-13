const mongo = require('mongodb').MongoClient;

const firstName = process.argv[2];
const lastName = process.argv[3];
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if(err) return console.log("Connection failed");
  
  const pcollections = db.collection('docs');
  
  const insertionDoc = {
    firstName: firstName,
    lastName: lastName
  };

  pcollections.insert(insertionDoc,(err, data) => {
    console.log(JSON.stringify(insertionDoc));
  });

  db.close();
})