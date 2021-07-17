package com.club.backend.clubManager.components;

import org.springframework.stereotype.Component;

@Component
public class Login {
    private String contactNumber;
    private String password;

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}