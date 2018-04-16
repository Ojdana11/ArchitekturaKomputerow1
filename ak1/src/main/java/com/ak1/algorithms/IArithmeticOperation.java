package com.ak1.algorithms;

public interface IArithmeticOperation {
    byte[] addition(byte [] a, byte [] b, byte base);
    byte[] subtraction(byte [] a, byte [] b, byte base) throws Exception;
    byte[] multiplication(byte [] a, byte [] b, byte base);
    byte[] divisionTotal(byte [] a, byte[] b, byte base);
}
