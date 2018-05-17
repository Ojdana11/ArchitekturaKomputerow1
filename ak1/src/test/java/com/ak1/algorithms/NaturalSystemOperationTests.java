package com.ak1.algorithms;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
public class NaturalSystemOperationTests {



    byte [] a = {    11,2,13,4,15,6};
    byte [] b = {3,5,11,2,13,4,15,6};
    byte baseHex =16;

    @Test
    void shouldBeCorrectSumHex() throws Exception {
        IArithmeticOperation naturalSystemOperation = new SupplySystemOperation();
        byte [] sumHex = naturalSystemOperation.add(a, b, baseHex);
            assertEquals(12,sumHex[8]);
            assertEquals(14,sumHex[7]);
            assertEquals(9,sumHex[6]);
            assertEquals(10,sumHex[5]);
            assertEquals(5,sumHex[4]);
            assertEquals(6,sumHex[3] );
            assertEquals(5,sumHex[2] );
            assertEquals(3,sumHex[1]);
            assertEquals(0,sumHex[0]);

            }

    byte [] c = {3,7,3,5,7,2,0,3};
    byte [] d = {5,7,2,0,3};
    byte baseOct =8;

    @Test
    void shouldBeCorrectSumOct() throws Exception {
        IArithmeticOperation naturalSystemOperation2 = new SupplySystemOperation();
        byte [] sumOct = naturalSystemOperation2.add(c, d, baseOct);
        assertEquals(6,sumOct[8]);
        assertEquals(0,sumOct[7]);
        assertEquals(4,sumOct[6]);
        assertEquals(6,sumOct[5]);
        assertEquals(3,sumOct[4]);
        assertEquals(4,sumOct[3] );
        assertEquals(7,sumOct[2] );
        assertEquals(3,sumOct[1]);
        assertEquals(0,sumOct[0]);
    }

    byte [] aSub = {4,1,11,2,1,4,15,6};
    byte [] bSub = {3,5,11,2,13,4,8,6};
    byte [] subtractionHex;

     @Test
    void shouldBeCorrectSubtractionHex() {
        try{
            IArithmeticOperation naturalSystemOperation3 = new SupplySystemOperation();

            subtractionHex = naturalSystemOperation3.sub(aSub, bSub, baseHex);
        }catch(Exception ex){

        }
        assertEquals(0,subtractionHex[8]);
        assertEquals(7,subtractionHex[7]);
        assertEquals(0,subtractionHex[6]);
        assertEquals(4,subtractionHex[5]);
        assertEquals(15,subtractionHex[4]);
        assertEquals(15,subtractionHex[3] );
        assertEquals(11,subtractionHex[2] );
        assertEquals(0,subtractionHex[1]);
        assertEquals(0,subtractionHex[0]);
        assertEquals(0,subtractionHex[0]);

    }

    byte [] aMulti = {1,4,5,6};
    byte [] bMulti = {0,3,2,3};
    byte baseSeven = 7;



    @Test

    void shouldBeCorrectMultiplication(){
        IArithmeticOperation naturalSystemOperation4 = new SupplySystemOperation();
        byte [] Multiplication = naturalSystemOperation4.multi(aMulti, bMulti, baseSeven);
        assertEquals(4,Multiplication[9]);
        assertEquals(1,Multiplication[8]);
        assertEquals(2,Multiplication[7]);
        assertEquals(4,Multiplication[6]);
        assertEquals(4,Multiplication[5]);
        assertEquals(5,Multiplication[4]);
        assertEquals(0,Multiplication[3]);
        assertEquals(0,Multiplication[2]);
        assertEquals(0,Multiplication[1]);
        assertEquals(0,Multiplication[0]);

    }

    byte [] aDivi = {2,3,5,6,7,2,1,3,4,5};
    byte [] bDivi = {4,5,4};


    @Test
    void shouldBeCorrectDivisionTotal(){
        IArithmeticOperation naturalSystemOperation5 = new SupplySystemOperation();

        byte [] DivisionTotal = naturalSystemOperation5.divTotal(aDivi, bDivi, baseOct);
        assertEquals(2,DivisionTotal[7]);
        assertEquals(7,DivisionTotal[6]);
        assertEquals(2,DivisionTotal[5]);
        assertEquals(3,DivisionTotal[4]);
        assertEquals(5,DivisionTotal[3]);
        assertEquals(1,DivisionTotal[2]);
        assertEquals(4,DivisionTotal[1]);
        assertEquals(0,DivisionTotal[0]);
    }
}
