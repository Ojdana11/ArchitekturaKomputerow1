package com.ak1.model;

import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonView;

public class ConverterModel {

    @JsonView(Views.Public.class)
    double value;

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public ConverterModel(double value) {
        this.value = value;
    }


    public ConverterModel() {

    }
}
