package com.ak1.algorithms;

import com.ak1.exceptions.ValueOutOfBase;


//żeby zrobić konwersję potrzebne są operacje dzielenia
public class NaturalSystemConverter implements INumberConverter {

    public static System system = System.NATURAL;

    @Override
    public String convertToOtherBase(String arg, int fromBase, int otherBase) throws ValueOutOfBase, NumberFormatException {

        if(!argumentCheck(arg, otherBase)){
            return "something went wrong";
        }

        String [] splitedNumber = new String[2];
        splitedNumber[0] = arg;
        splitedNumber[1] = "0";

        if(arg.indexOf(",")!=-1)
        {
            splitedNumber = arg.split(",");
        }

        if(arg.indexOf(".")!=-1)
        {
            splitedNumber = arg.split(".");
        }

        return "" + convertTotalPart(splitedNumber[0], otherBase)+","
                + convertFractionalPart(splitedNumber[1], otherBase, splitedNumber[1].length());

    }

    @Override
    public String convertToOtherSystem(String arg, System otherSystem) {
        return null;
    }


    private boolean argumentCheck(String a, int base) throws ValueOutOfBase{
        int valueOnPosition, comaCount = 0, argumentLength = a.length();
            for(int i=0; i<argumentLength;i++)
            {
                valueOnPosition = Character.getNumericValue(a.charAt(i));
                if(valueOnPosition>=base || valueOnPosition<0)
                {
                    if((a.charAt(i) ==',' || a.charAt(i) == '.' ) && comaCount!=0)
                        throw new ValueOutOfBase("Incorrect value on position: " + valueOnPosition);
                    comaCount++;
                }
            }
        return true;
    }

    private String convertFractionalPart(String fractional, int base, int accuracy){

        if(fractional=="0")
            return fractional;

        String remainder[], convertedFractionalPart = "";
        float newValue;
        for(int i=0;i<accuracy;i++)
        {
            newValue = Float.parseFloat(fractional)* base;
            remainder = Float.toString(newValue).split(".");
            convertedFractionalPart+=remainder[0];
            if(Integer.parseInt(remainder[1])==0 || remainder[1]==null || remainder[1] =="")
                break;
        }

        return convertedFractionalPart;
    }

    private String convertTotalPart(String total, int base){

        String newTotal ="";
        int totalAsInt = Integer.parseInt(total);
        while(totalAsInt!=0){
            newTotal+= totalAsInt%base;
            totalAsInt = totalAsInt/base;
        }

        return new StringBuffer(newTotal).reverse().toString();
    }

}
