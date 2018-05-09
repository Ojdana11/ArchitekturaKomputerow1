package com.ak1.controller;

import com.ak1.model.CalculatorModel;
import com.ak1.model.CalculatorResponseBody;
import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @JsonView(Views.Public.class)
    @RequestMapping(value = "/compute", method = RequestMethod.POST)
    public ResponseEntity<?> compute(@RequestBody CalculatorModel data) {

        return new ResponseEntity(new CalculatorResponseBody( "Result ... coming soon"),
                HttpStatus.OK);
    }

}
