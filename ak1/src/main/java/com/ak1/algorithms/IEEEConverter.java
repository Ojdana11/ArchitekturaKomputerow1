package com.ak1.algorithms;

import java.lang.System;

public class IEEEConverter implements InterfaceIEEEConverter {
    @Override
    public String fromDecimalToIEEE(double number) {
        return    Long.toBinaryString(Double.doubleToLongBits(number));
    }
}
