package com.ak1.controller;

import com.ak1.algorithms.IEEEConverter;
import com.ak1.algorithms.InterfaceIEEEConverter;
import com.ak1.model.CalculatorResponseBody;
import com.ak1.model.ConverterModel;
import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IEEEController {

    InterfaceIEEEConverter ieeeConverter;
    @JsonView(Views.Public.class)
    @JsonProperty("number")
    @RequestMapping(value = "/convertieee", method = RequestMethod.POST)
    public ResponseEntity<?> compute(@RequestBody ConverterModel converterModel) {
        ieeeConverter = new IEEEConverter();
        return new ResponseEntity(new CalculatorResponseBody(
                ieeeConverter.fromDecimalToIEEE(converterModel.getValue())),
                HttpStatus.OK);
    }
}

