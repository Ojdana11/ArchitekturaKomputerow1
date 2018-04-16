package com.ak1.algorithms;

import com.ak1.exceptions.ValueOutOfBase;

public interface INumberConverter {

    String convertToOtherBase(String arg,int fromBase, int otherBase)  throws ValueOutOfBase, NumberFormatException;
    String convertToOtherSystem(String arg, System otherSystem);
    //boolean argumentCheck(String a, int base) throws ValueOutOfBase;
}
