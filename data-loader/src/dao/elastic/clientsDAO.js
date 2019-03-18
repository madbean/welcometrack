const clientElastic = require('./');

const save = client => new Promise((resolve, reject) => {
    clientElastic.index({  
        index: 'clients',
        id: client.id,
        type: 'clients',
        body: client
    },
    (error,result) => {
        if(error) reject(error);
        if(result) resolve(result);
    });
});

module.exports = {
    save
}