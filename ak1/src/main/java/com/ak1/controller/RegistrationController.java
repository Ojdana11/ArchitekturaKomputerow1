package com.ak1.controller;


import com.fasterxml.jackson.annotation.JsonView;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ak1.model.User;
import com.ak1.repository.UserRepository;
import com.ak1.model.LoginResponseBody;
import com.ak1.views.Views;
import java.sql.Timestamp;
import java.util.Date;

@RestController
public class RegistrationController {


    @Autowired
    UserRepository userRepository; //Service which will do all data retrieval/manipulation work

    @JsonView(Views.Public.class)
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody User data) {

        User user = userRepository.findByEmail(data.getEmail());

        if (user != null) {
            return new ResponseEntity(new LoginResponseBody(false, null, "User with that name has already existed"),
                    HttpStatus.OK);
        }
        long time = new Date().getTime();
        Integer id =  new Timestamp(time).getNanos();
        //TO DO: add hashing password
        User newUser = new User(data.getFirstname(), data.getSurname(), data.getEmail(), data.getPassword(), id);
        userRepository.save(newUser);

        String token = Jwts.builder()
                .setSubject(newUser.getEmail())
                .compact();

        return new ResponseEntity(new LoginResponseBody(true, token), HttpStatus.OK);
    }

}