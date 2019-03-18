package com.welcometrack.csv.reader.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Client {
    @JsonProperty("id")
    private Long id;
    @JsonProperty("first_name")
    private String firstName;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("email")
    private String email;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("ip_address")
    private String ipAddress;
    @JsonProperty("last_login")
    private Date lastLogin;
    @JsonProperty("account_balance")
    private BigDecimal accountBalance;
    @JsonProperty("country")
    private String country;
    @JsonProperty("favorite_color")
    private String favoriteColor;
}
