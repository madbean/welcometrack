package com.welcometrack.csv.reader.controllers;

import com.welcometrack.csv.reader.controllers.responses.AddClientCSVResponse;
import com.welcometrack.csv.reader.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/upload-csv")
    public ResponseEntity<AddClientCSVResponse> add(@RequestParam("file") MultipartFile multipartFile) throws Exception {

        if (multipartFile == null) {
            throw new RuntimeException("invalid file");
        }

        AddClientCSVResponse addClientCSVResponse = clientService.save(multipartFile);

        return new ResponseEntity<>(
            addClientCSVResponse,
                addClientCSVResponse.isSuccess()
                        ? HttpStatus.OK
                        : HttpStatus.BAD_REQUEST);
    }
}
