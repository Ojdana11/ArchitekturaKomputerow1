package com.ak1.controller;


import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
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
import com.ak1.model.LoginModel;
import com.ak1.views.Views;
import java.sql.Timestamp;
import java.util.*;


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

        return new ResponseEntity(new LoginResponseBody(true, token), HttpStatus.OK);
    }
}
