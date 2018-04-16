package com.ak1.algorithms;

public class NaturalSystemOperation implements IArithmeticOperation {


    @Override
    public byte[] addition(byte[] a, byte[] b, byte base) {
        byte s, c=0;
        byte [] newValue;
        int size;
//sprawdzenie długości a i b jeżeli są różne to wyrównać zerami
        size=a.length;
        newValue = new byte[size+1];

        for(int i=size-1;i>=0;i--)
        {
            s= (byte)(c+b[i]+a[i]);
            if(s>=base)
            {
                newValue[i+1]=(byte) (s-base);
                c=1;
            }
            else{
                newValue[i+1]=s;
                c=0;
            }
        }
        newValue[0]=c;
        return newValue;
    }

    @Override
    public byte[] subtraction(byte[] a, byte[] b, byte base) throws Exception {
        byte s, c=0;
        byte [] newValue = new byte[a.length+1];

        if(b.length>a.length)
            throw new Exception("In Natural system value cannot be less then zero. A-B gives negative value");

        for(int i=0;i<a.length;i++)
        {
            s= (byte)(a[i]-b[i]-c);
            if(s<0)
            {
                newValue[i]=(byte)(s+base);
                c=1;
            }
            else{
                newValue[i]=s;
                c=0;
            }
        }
        if(newValue[a.length]<0 || newValue[a.length-1]<0)
            throw new Exception("In Natural system value cannot be less then zero. A-B gives negative value");

        return newValue;
    }

    @Override
    public byte[] multiplication(byte[] a, byte[] b, byte base) {
        int s;
        byte c=0;
        int lengthOfPartialSum = a.length +b.length;
        byte [][]partialSum = new byte[b.length][lengthOfPartialSum];
        byte [] newValue = new byte[b.length+a.length];
        for(int i=0;i<b.length;i++)
        {
            for(int j=i;j<lengthOfPartialSum;j++)
            {
                s=b[i]*a[j]+c;
                partialSum[i][j]=(byte)(s%base);
                c=(byte)(s/base);
            }
        }

        c=0;
        for(int k=0;k<lengthOfPartialSum;k++)
        {
            s=0;
            for(int w=0;w<b.length;w++)
            {
                s+=partialSum[w][k];
            }
            s+=c;
            newValue[k]=(byte)(s%base);
            c=(byte)(s/base);

        }

        return newValue;
    }

    @Override
    public byte[] divisionTotal(byte[] a, byte[] b, byte base) {

        byte [][] bMultiple = new byte[base][base+1];
        byte[] multiple = {0};
        if(a.length<b.length)
        {
            return multiple;
        }
        byte newValueSize = (byte)(a.length-b.length+1);
        byte [] newValue = new byte[newValueSize];

        for(byte i=0;i<base;i++)
        {
            multiple[0]=i;
            bMultiple[i]=multiplication(b,multiple,base);
        }

        byte [] subArrayA = new byte[b.length+1];

        byte pointerCurrentPosition = (byte)(a.length-b.length);
        while(pointerCurrentPosition>=0){

            for(int i=pointerCurrentPosition;i>0;i--)
            {
                subArrayA[0]=a[a.length-i];
            }
            byte subMultiple =0;
            while(isBigger(subArrayA,bMultiple[subMultiple])!=-1) {
                subMultiple--;
            }
            newValue[pointerCurrentPosition]=subMultiple;
        }

        return newValue;
    }

    private int isBigger(byte[] a, byte [] b){

        if(a.length >b.length)
            return 1;
        if(b.length>a.length)
            return -1;

        byte [] newValue = new byte[a.length];
        for(int i=a.length;i>=0;i++)
        {
            if(a[i]>b[i])
                return 1;
            if(b[i]>a[i])
                return -1;
        }
        return 0;
    }

}
