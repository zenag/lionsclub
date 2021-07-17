package com.club.backend.clubManager.controller;

import com.club.backend.clubManager.components.JWTTokenProvider;
import com.club.backend.clubManager.components.Login;
import com.club.backend.clubManager.components.PasswordCryptographyProvider;
import com.club.backend.clubManager.components.UserAuthResponse;
import com.club.backend.clubManager.entity.User;
import com.club.backend.clubManager.entity.UserAuth;
import com.club.backend.clubManager.repository.UserAuthRepository;
import com.club.backend.clubManager.repository.UserRepository;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController

@RequestMapping("/v1")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserAuthRepository userauthRepository;

    @Autowired
    UserAuthResponse userauthresponse;

    @Autowired
    PasswordCryptographyProvider passwordCryptographyProvider;

    @RequestMapping(value="/users", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getUsers(){
        List<User> users = userRepository.findAll();
        return new ResponseEntity<Object>(users, HttpStatus.OK);
    }

    @PostMapping(value="/user/add")
    public ResponseEntity<Object> addUser(@RequestBody User user){
        user.setUuid(UUID.randomUUID().toString());
        String[] encryptedText = passwordCryptographyProvider.encrypt(user.getPassword());
        user.setSalt(encryptedText[0]);
        user.setPassword(encryptedText[1]);
        //Gson gson = new GsonBuilder().setPrettyPrinting().create();
        userRepository.save(user);

        return new ResponseEntity<Object>(user, HttpStatus.OK);
    }

    @PostMapping(value="/auth/login")
    public ResponseEntity<Object> signin(@RequestBody Login login){

        User user = new User();

        List<User> userdata =  userRepository.findByContactNumberAndRole(login.getContactNumber(),"admin");

        final String encryptedPassword =
                passwordCryptographyProvider.encrypt(login.getPassword(), userdata.get(0).getSalt());
        JWTTokenProvider jwttokenprovider= new JWTTokenProvider(encryptedPassword);
        UserAuth userAuth = new UserAuth();
        userAuth.setUuid(userdata.get(0).getUuid());
        userAuth.setUser(userdata.get(0));
        final ZonedDateTime now = ZonedDateTime.now();
        final ZonedDateTime expiresAt = now.plusHours(8);
        userAuth.setAccessToken(
                jwttokenprovider.generateToken(userdata.get(0).getUuid(), now, expiresAt));
        userAuth.setLoginAt(now);
        userAuth.setExpiresAt(expiresAt);

        userRepository.save(userAuth);
       // Gson gson = new GsonBuilder().setPrettyPrinting().create();
        //System.out.println(gson.toJson(userAuth));
        userauthresponse.setAccess_token(userAuth.getAccessToken());
        userauthresponse.setUuid(userAuth.getUuid());
        userauthresponse.setExpires_at(userAuth.getExpiresAt());
        userauthresponse.seUsername(userAuth.getUser().getUserName());
        return new ResponseEntity<Object>(userauthresponse, HttpStatus.OK);

    }

}
