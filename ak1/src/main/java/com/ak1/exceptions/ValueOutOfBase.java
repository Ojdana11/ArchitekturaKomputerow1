package com.ak1.exceptions;

public class ValueOutOfBase extends Exception {
    public String message;
    public ValueOutOfBase(String message){
        this.message = message;
    }
}
