package com.ak1.algorithms;

public class NaturalSystemExpression implements INaturalSystemExpression {
    private int _base;
    public NaturalSystemExpression(int base){
        _base = base;
    }


    @Override
    public double addition(double a, double b) {
        return a+b;
    }

    @Override
    public double subtraction(double a, double b) {
        return a-b;
    }

    @Override
    public double multiplication(double a, double b) {
        return a*b;
    }

    @Override
    public double division(double a, double b) {
        return 0;
    }
}
