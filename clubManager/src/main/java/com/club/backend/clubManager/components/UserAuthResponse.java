package com.club.backend.clubManager.components;

import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
@Component
public class UserAuthResponse {
    private String uuid;
    private String access_token;
    private ZonedDateTime expires_at;
    private String username;

    public String getUsername() {
        return username;
    }

    public void seUsername(String username) {
        this.username = username;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public ZonedDateTime getExpires_at() {
        return expires_at;
    }

    public void setExpires_at(ZonedDateTime expires_at) {
        this.expires_at = expires_at;
    }
}
