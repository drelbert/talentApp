const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; 

//The connection function
const mongoConnect = callback => {
MongoClient.connect('mongodb://127.0.0.1:27017')
    .then(client => {
        console.log('Connected!');
        _db = client.db('talentDb');
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });

};

const getDb = () =>  {
   if (_db) {
       return _db;
   }
   throw 'No DB found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;