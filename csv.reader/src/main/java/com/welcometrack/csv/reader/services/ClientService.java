package com.welcometrack.csv.reader.services;

import com.welcometrack.csv.reader.controllers.responses.AddClientCSVResponse;
import com.welcometrack.csv.reader.kafka.Sender;
import com.welcometrack.csv.reader.models.Client;
import com.welcometrack.csv.reader.utils.FileReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private Sender sender;

    public AddClientCSVResponse save(MultipartFile multipartFile) {
        try {
            List<Client> clients = FileReader.readAll(multipartFile);

            clients.stream()
                    .forEach(client -> sender.send(client));

            return AddClientCSVResponse
                    .builder()
                    .success(true)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();

            return AddClientCSVResponse.builder()
                    .errorMessage("Invalid CSV file")
                    .build();
        }
    }
}