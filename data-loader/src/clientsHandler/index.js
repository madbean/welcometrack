const clientRepository = require('../repositories/clientsRepository');
const mysqlClientsDAO = require('../dao/mysql/clientsDAO');
const mongoClientsDAO = require('../dao/mongo/clientsDAO');
const elasticClientsDAO = require('../dao/elastic/clientsDAO');

const mysqlClientsHandler = client => {
    const dao = clientRepository(mysqlClientsDAO)
    dao.save(client)
        .then(result => console.log(`[MySQL] ${client.id} - success`))
        .catch(err => console.error(`[MySQL] ${client.id} - ${err.message}`));
}

const mongoClientsHandler = client => {
    const dao = clientRepository(mongoClientsDAO)
    dao.save(client)
        .then(result => console.log(`[Mongo] ${client.id} - success`))
        .catch(err => console.error(`[Mongo] ${client.id} - ${err.message}`));
}

const logger = client => {
    const dao = clientRepository(elasticClientsDAO)
    dao.save(client)
        .then(result => console.log(`[Logger] ${client.id} - success`))
        .catch(err => console.error(`[Logger] ${client.id} - ${err}`));
}

module.exports = {
    mysqlClientsHandler,
    mongoClientsHandler,
    logger
}