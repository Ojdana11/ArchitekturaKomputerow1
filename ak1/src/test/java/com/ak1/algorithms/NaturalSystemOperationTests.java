package com.ak1.algorithms;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
public class NaturalSystemOperationTests {

    IArithmeticOperation naturalSystemOperation = new NaturalSystemOperation();

    byte [] a = {11,2,13,4,15,6};
    byte [] b = {11,2,13,4,15,6};
    byte baseHex =16;
    byte [] sumHex = naturalSystemOperation.addition(a,b,baseHex);

    @Test
    void shouldBeCorrectSumHex() {

            assertEquals(12,sumHex[6]);
            assertEquals(14,sumHex[5]);
            assertEquals(9,sumHex[4]);
            assertEquals(10,sumHex[3]);
            assertEquals(5,sumHex[2] );
            assertEquals(6,sumHex[1] );
            assertEquals(1,sumHex[0]);

            }

    byte [] c = {3,7,3,5,7,2,0,3};
    byte [] d = {5,7,2,0,3};
    byte baseOct =8;

    byte [] sumOct = naturalSystemOperation.addition(c,d,baseOct);
    @Test
    void shouldBeCorrectSumOct() {
        assertEquals(6,sumOct[8]);
        assertEquals(0,sumOct[7]);
        assertEquals(4,sumOct[6]);
        assertEquals(6,sumOct[5]);
        assertEquals(3,sumOct[4] );
        assertEquals(4,sumOct[3] );
        assertEquals(7,sumOct[2]);
        assertEquals(3,sumOct[1]);
        assertEquals(0,sumOct[0]);
    }

}
