const clientConsumer = require('./kafka')
const clientsHandlers = require('./clientsHandler')

const initElasticIndex = require('./dao/elastic/init');
const initMysql = require('./dao/mysql/init');

initElasticIndex();
initMysql();

const clientConsumerConfigMysql = {
    topics: [{ topic: 'test', partition: 0 }],
    options: {
        autoCommit: false,
        groupId: 'mysql-data-loader',
        autoCommit: true,
        autoCommitIntervalMs: 5000,
    },
    handler: clientsHandlers.mysqlClientsHandler,
}

const clientConsumerConfigMongo = {
    topics: [{ topic: 'test', partition: 0 }],
    options: {
        autoCommit: false,
        groupId: 'mongo-data-loader',
        autoCommit: true,
        autoCommitIntervalMs: 5000,
    },
    handler: clientsHandlers.mongoClientsHandler
}

const clientConsumerConfigLogger = {
    topics: [{ topic: 'test', partition: 0 }],
    options: {
        autoCommit: false,
        groupId: 'logger',
        autoCommit: true,
        autoCommitIntervalMs: 5000,
    },
    handler: clientsHandlers.logger
}

clientConsumer(clientConsumerConfigMysql);
clientConsumer(clientConsumerConfigMongo);
clientConsumer(clientConsumerConfigLogger);