package com.ak1.model;

import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonView;

public class CalculatorResponseBody {

    @JsonView(Views.Public.class)
    String result;

    public CalculatorResponseBody(){}

    public CalculatorResponseBody(String _result){
        this.result = _result;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

}
