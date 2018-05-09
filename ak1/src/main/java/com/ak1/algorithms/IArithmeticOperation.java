package com.ak1.algorithms;

public interface IArithmeticOperation {
    byte[] add(byte[] a, byte[] b, byte base) throws Exception;
    byte[] sub(byte[] a, byte[] b, byte base) throws Exception;
    byte[] multi(byte[] a, byte[] b, byte base);
    byte[] divTotal(byte [] a, byte[] b, byte base);
}
