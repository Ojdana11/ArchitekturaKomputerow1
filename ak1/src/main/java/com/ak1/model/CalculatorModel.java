package com.ak1.model;

public class CalculatorModel {
    public byte[] getArgA() {
        return argA;
    }

    public void setArgA(byte [] argA) {
        this.argA = argA;
    }

    public byte[] getArgB() {
        return argB;
    }

    public void setArgB(byte[] argB) {
        this.argB = argB;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public byte getBase() {
        return base;
    }

    public void setBase(byte base) {
        this.base = base;
    }

    public String getWhichSystem() {
        return whichSystem;
    }

    public void setWhichSystem(String whichSystem) {
        this.whichSystem = whichSystem;
    }

    byte [] argA;
    byte [] argB;
    String operation;
    byte base;
    String whichSystem;
}
