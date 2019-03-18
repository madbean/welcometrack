const MongoClient = require('mongodb').MongoClient;
 
const url = 'mongodb://localhost:27017';
 
const getClient = cb => {
    MongoClient.connect(url, function(err, client) {        
        cb(client);
    });
}

module.exports = getClient;