const kafka = require('kafka-node');
const Consumer = kafka.Consumer;

const clientConsumer = config => {
    const { topics, options, handler } = config;
    const client = new kafka.KafkaClient();

    const consumer = new Consumer(
        client,
        topics,
        options
    );

    consumer.on('error', (err) => {
        console.error(err)
    });
    
    consumer.on('message', (message) => {
        const value = JSON.parse(message.value);
        handler(value);
    });
}

module.exports = clientConsumer