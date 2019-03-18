package com.welcometrack.csv.reader.utils;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.welcometrack.csv.reader.models.Client;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public class FileReader {

    public static List<Client> readAll(MultipartFile multipartFile) throws IOException {
        CsvSchema bootstrap = CsvSchema
                .builder()
                .build()
                .withHeader();

        CsvMapper csvMapper = new CsvMapper();

        MappingIterator<Client> lines =  csvMapper
                .readerWithSchemaFor(Client.class)
                .with(bootstrap)
                .readValues(multipartFile.getInputStream());

        return lines.readAll();
    }
}