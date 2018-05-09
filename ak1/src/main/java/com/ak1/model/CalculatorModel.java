package com.ak1.model;

public class CalculatorModel {
    public String getArgA() {
        return argA;
    }

    public void setArgA(String argA) {
        this.argA = argA;
    }

    public String getArgB() {
        return argB;
    }

    public void setArgB(String argB) {
        this.argB = argB;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public int getBase() {
        return base;
    }

    public void setBase(int base) {
        this.base = base;
    }

    public String getWhichSystem() {
        return whichSystem;
    }

    public void setWhichSystem(String whichSystem) {
        this.whichSystem = whichSystem;
    }

    String argA;
    String argB;
    String operation;
    int base;
    String whichSystem;
}
