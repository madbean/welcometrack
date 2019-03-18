const getClient = require('./mongoClient');

const save = client => {
    return new Promise((resolve, reject) => {
        getClient((mongoClient) => {
            const db = mongoClient.db('test');
            const collection = db.collection('clients');
            collection.insertOne(client, function(error, result) {
                if(error) reject(error);
                if(result) resolve({ success: true });
            });
            mongoClient.close()
        })
    });
}

module.exports = {
    save,
}