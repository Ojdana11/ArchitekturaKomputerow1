package com.ak1.controller;


import com.ak1.model.LoginModel;
import com.ak1.model.LoginResponseBody;
import com.ak1.model.User;
import com.ak1.repository.UserRepository;
import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonView;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;


@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @JsonView(Views.Public.class)
    @RequestMapping(value = "/singin", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody LoginModel data) {
        User user = userRepository.findByEmail(data.getEmail());

        if (user == null) {
            return new ResponseEntity(new LoginResponseBody(false, null, "User with that name isn't exist"),
                    HttpStatus.OK);
        }

        if (!Objects.equals(user.getPassword(), data.getPassword())) {
            return new ResponseEntity(new LoginResponseBody(false, null, "wrong_password"),
                    HttpStatus.OK);
        }

        String token = Jwts.builder()
                .setSubject(data.getEmail())
                .compact();
        boolean isAdmin = user.getEmail().equals("admin@wp.pl");
        return new ResponseEntity(new LoginResponseBody(true, token, String.valueOf(isAdmin)), HttpStatus.OK);
    }
}
