package com.ak1.controller;

import com.ak1.algorithms.IArithmeticOperation;
import com.ak1.algorithms.NaturalSystemOperation;
import com.ak1.algorithms.SupplySystemOperation;
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
public class CalculatorController {

    IArithmeticOperation arithmeticOperation;
    @JsonView(Views.Public.class)
    @RequestMapping(value = "/compute", method = RequestMethod.POST)
    public ResponseEntity<?> compute(@RequestBody CalculatorModel data) {

        if(data.getWhichSystem() == "uzupelnieniowy")
            arithmeticOperation = new SupplySystemOperation();
        else {
            arithmeticOperation=new NaturalSystemOperation();
        }
        switch(data.getOperation()){
            case "addition":
                return new ResponseEntity(new CalculatorResponseBody(Arrays.toString(
                        arithmeticOperation.add(data.getArgA(),data.getArgB(),data.getBase()))),
                        HttpStatus.OK);
            case "subtraction":
                return new ResponseEntity(new CalculatorResponseBody(Arrays.toString(
                        arithmeticOperation.sub(data.getArgA(),data.getArgB(),data.getBase()))),
                        HttpStatus.OK);
            case "multiplication":
                return new ResponseEntity(new CalculatorResponseBody(Arrays.toString(
                        arithmeticOperation.multi(data.getArgA(),data.getArgB(),data.getBase()))),
                        HttpStatus.OK);
            case "division":
                return new ResponseEntity(new CalculatorResponseBody(Arrays.toString(
                        arithmeticOperation.divTotal(data.getArgA(),data.getArgB(),data.getBase()))),
                        HttpStatus.OK);

        }
        return new ResponseEntity(new CalculatorResponseBody( "Something went wrong"),
                HttpStatus.OK);
    }

}
