package com.club.backend.clubManager.controller;

import com.club.backend.clubManager.components.PasswordCryptographyProvider;
import com.club.backend.clubManager.entity.Events;
import com.club.backend.clubManager.entity.User;
import com.club.backend.clubManager.repository.EventsRepository;
import com.club.backend.clubManager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1")
public class EventsController {

    @Autowired
    EventsRepository eventsRepository;

    @RequestMapping(value="/events", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getEvents(){
        List<Events> events = eventsRepository.findAll();
        return new ResponseEntity<Object>(events, HttpStatus.OK);
    }

    @PostMapping(value="/events/add")
    public ResponseEntity<Object> addUser(@RequestBody Events event) {
        Events events = eventsRepository.save(event);
        return new ResponseEntity<Object>(events, HttpStatus.OK);
    }

}
