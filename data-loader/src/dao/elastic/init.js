const client = require('./');

module.exports = () => {    
    client.indices.create({  
            index: 'clients'
        },
        (error, result, status) => {
            console.log('init elastic clients index')
            if(error) {
                console.log('index exist');
            }
            else {
                console.log("create", result, status);
            }
        });
}