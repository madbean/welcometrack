package com.welcometrack.csv.reader.kafka;

import com.welcometrack.csv.reader.models.Client;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;

public class Sender {

    private static final Logger logger = LoggerFactory.getLogger(Sender.class);
    private static final String TOPIC = "test";

    @Autowired
    private KafkaTemplate<String, Client> kafkaTemplate;

    public void send(Client client) {
        kafkaTemplate.send(TOPIC, client);
    }
}
