package com.ak1.algorithms;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class NaturalSystemConverterTests {

    INumberConverter naturalSystemConverter = new NaturalSystemConverter();

    byte [] a = {11,2,13,4,15,6};
    byte [] b = {11,2,13,4,15,6};

    @Test
    void myFirstTest() {
        assertEquals(2, 1 + 1);
    }
}
