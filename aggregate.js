const mongo = require('mongodb').MongoClient;

const dbname = 'learnyoumongo';
const url = `mongodb://localhost:27017/${dbname}`;
const collectionName = 'prices';
const size = process.argv[2];

mongo.connect(url, (err, db) => {
  const collection = db.collection(collectionName);

  collection.aggregate([{
    $match: { size: size }
  },{
    $group:{
      _id:'tshirts',
      tshirts:{
        $avg: '$price'
      }
    }
  }]).toArray(function(err, results) {
    console.log(Number(results[0].tshirts).toFixed(2));
  });


  db.close();
});