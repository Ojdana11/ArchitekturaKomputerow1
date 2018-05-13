package com.ak1.controller;

import com.ak1.algorithms.IEEEConverter;
import com.ak1.algorithms.InterfaceIEEEConverter;
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

import java.util.Arrays;

@RestController
public class IEEEController {

    InterfaceIEEEConverter ieeeConverter;
    @JsonView(Views.Public.class)
    @RequestMapping(value = "/convertieee", method = RequestMethod.POST)
    public ResponseEntity<?> compute(@RequestBody double number) {
        ieeeConverter = new IEEEConverter();
        return new ResponseEntity(new CalculatorResponseBody(
                ieeeConverter.fromDecimalToIEEE(number)),
                HttpStatus.OK);
    }
}

