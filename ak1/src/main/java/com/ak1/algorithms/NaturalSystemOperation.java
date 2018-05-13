package com.ak1.algorithms;

import com.ak1.exceptions.ValueOutOfBase;

public class NaturalSystemOperation implements IArithmeticOperation{


    private byte[] topArgumentUp(byte[] a, int newSize){
        byte [] newA = new byte[newSize];
        int i;
        for(i=0;i<newSize-a.length;i++)
        {
            newA[i]=0;
        }
        for(int j=i;j<newSize;j++)
        {
            newA[j]=a[j-i];
        }
        return newA;
    }


    @Override
    public byte[] add(byte[] a, byte[] b, byte base){
        byte s, c=0;
        byte [] newValue;
        int size = a.length;


        newValue = new byte[size+1];

        for(int i=size-1;i>=0;i--)
        {
            s= (byte)(c+a[i]+b[i]);
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
    public byte[] sub(byte[] a, byte[] b, byte base){

        byte s, c=0;
        byte [] newValue;
        int size = a.length;

        newValue = new byte[size+1];

        for(int i=size-1;i>=0;i--)
        {
            s= (byte)(a[i]-b[i]-c);
            if(s<0)
            {
                newValue[i+1]=(byte)(s+base);
                c=1;
            }
            else{
                newValue[i+1]=s;
                c=0;
            }
        }
        newValue[0]=c;

        if(c==1)
            newValue[0]=(byte)(base-1);

        return newValue;
    }

    @Override
    public byte[] multi(byte[] a, byte[] b, byte base) {
        int s;
        byte c=0;
        int lengthOfPartialSum = a.length +b.length;
        byte [][]partialSum = new byte[b.length][lengthOfPartialSum];
        byte [] newValue = new byte[b.length+a.length];
        for(int i=b.length-1;i>=0;i--)
        {
            for(int j=a.length-1, part =lengthOfPartialSum-i-1;j>=0;j--,part--)
            {
                s=b[i]*a[j]+c;
                partialSum[i][part]=(byte)(s%base);
                c=(byte)(s/base);
            }
            partialSum[i][0]=c;
        }

        c=0;
        for(int k=lengthOfPartialSum-1;k>=0;k--)
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
    public byte[] divTotal(byte[] a, byte[] b, byte base) {

        if(a[0]!=b[0]){
            byte [] helpfulArrayA = new byte[b.length];
            byte [] helpfulArrayB = new byte[a.length+1];
            helpfulArrayA[0]=a[0];
            for(int i=1;i<b.length-1;i++){
                helpfulArrayA[i]=a[i-1];
            }
            try {
                helpfulArrayA = add(helpfulArrayA,b,base);
            } catch (Exception e) {
                e.printStackTrace();
            }
            int iterrator;
            for (iterrator=0;iterrator<helpfulArrayA.length;iterrator++){
                helpfulArrayB[iterrator]=helpfulArrayA[iterrator];
            }
            helpfulArrayB[iterrator]=a[iterrator-1];
            a=helpfulArrayA;
        }
        byte [][] bMultiple = new byte[base+1][b.length+1];
        byte[] multiple = {0};
        if(a.length<b.length)
        {
            return multiple;
        }
        byte newValueSize = (byte)(a.length-b.length+1);
        byte [] newValue = new byte[newValueSize];

        for(byte i=0;i<=base;i++)
        {
            multiple[0]=i;
            bMultiple[i]=multi(b,multiple,base);
        }
        int sizeA = a.length, subASize = b.length+1;
        byte [] subArrayA = new byte[subASize];

        subArrayA[0]=0;
        for(int i=1;i<subASize;i++)
        {
            subArrayA[i]=a[i-1];
        }
        byte pointerCurrentPosition = (byte)(subASize-2);

        while(pointerCurrentPosition<sizeA){

            byte subMultiple =0;
            while(isBigger(subArrayA,bMultiple[subMultiple], base)!=-1) {
                subMultiple++;
            }
            subMultiple--;
            newValue[pointerCurrentPosition-subASize+2]=subMultiple;

            try {
                subArrayA = sub(subArrayA,bMultiple[subMultiple], base);
            } catch (Exception valueOutOfBase) {
                valueOutOfBase.printStackTrace();
            }

            byte [] newSubArraya = new byte[subASize];

            int diffWithSize=1;
            if(subArrayA.length>subASize)
                diffWithSize=2;
            for(int i=0;i<subASize-1;i++)
            {
                newSubArraya[i]=subArrayA[i+diffWithSize];
            }

            pointerCurrentPosition++;
            if(pointerCurrentPosition>=a.length)
                break;
            newSubArraya[subASize-1]=a[pointerCurrentPosition];
            subArrayA=newSubArraya;
        }

        return newValue;
    }

    private int isBigger(byte[] a, byte [] b, byte base){

        //1 - większe a
        //-1 - większe b
        //0 równe

        if(a[0]==0){
            if(b[0]==base-1)
                return 1;

            for(int i=0;i<a.length-1;i++)
            {
                if(a[i]>b[i])
                    return 1;
                if(b[i]>a[i])
                    return -1;
            }
            return 0;
        }
        if(b[0]==0)
        {
            return -1;
        }
        else{

            for(int i=0;i<a.length;i++)
            {
                if(a[i]>b[i])
                    return -1;
                if(b[i]>a[i])
                    return 1;
            }
            return 0;
        }
    }

}
