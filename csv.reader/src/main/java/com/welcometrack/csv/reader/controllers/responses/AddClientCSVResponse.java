package com.welcometrack.csv.reader.controllers.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AddClientCSVResponse {
    private boolean success;
    private String errorMessage;
}
