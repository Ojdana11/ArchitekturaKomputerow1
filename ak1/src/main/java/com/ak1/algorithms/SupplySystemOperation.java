package com.ak1.algorithms;

import com.ak1.exceptions.ValueOutOfBase;

public class SupplySystemOperation implements IArithmeticOperation{


    byte[] topArgumentUp(byte[] a, int newSize, byte extension){
        byte [] newA = new byte[newSize];
        int i;
        for(i=0;i<newSize-a.length;i++)
        {
            newA[i]=extension;
        }
        for(int j=i;j<newSize;j++)
        {
            newA[j]=a[j-i];
        }
        return newA;
    }


    @Override
    public byte[] add(byte[] a, byte[] b, byte base) throws Exception {
        int size = java.lang.Math.max(a.length,b.length);
        byte extensionA=0, extensionB=0;
        if(a[0]>=base/2)
            extensionA=(byte)(base-1);
        if(b[0]>=base/2)
            extensionB=(byte)(base-1);
        a=topArgumentUp(a, size+1,extensionA );
        b=topArgumentUp(b, size+1,extensionB);
        byte s, c=0;
        byte [] newValue;
        newValue = new byte[size+1];

        for(int i=size;i>=0;i--)
        {
            s= (byte)(c+a[i]+b[i]);
            if(s>=base)
            {
                newValue[i]=(byte) (s-base);
                c=1;
            }
            else{
                newValue[i]=s;
                c=0;
            }
        }


        return newValue;
    }

    @Override
    public byte[] sub(byte[] a, byte[] b, byte base) throws Exception {
        int size = java.lang.Math.max(a.length,b.length);
        byte extensionA=0, extensionB=0;
        if(a[0]>=base/2)
            extensionA=(byte)(base-1);
        if(b[0]>=base/2)
            extensionB=(byte)(base-1);
        a=topArgumentUp(a, size+1,extensionA );
        b=topArgumentUp(b, size+1,extensionB);
        byte s, c=0;
        byte [] newValue;

        newValue = new byte[size+1];

        for(int i=size;i>=0;i--)
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

        return newValue;
    }

    @Override
    public byte[] multi(byte[] a, byte[] b, byte base) {
        int size = java.lang.Math.max(a.length,b.length);
        byte extensionA=0, extensionB=0;
        if(a[0]>=base/2)
            extensionA=(byte)(base-1);
        if(b[0]>=base/2)
            extensionB=(byte)(base-1);
        a=topArgumentUp(a, size+1,extensionA );
        b=topArgumentUp(b, size+1,extensionB);

        int s;
        byte c=0;
        int lengthOfPartialSum = a.length +b.length;
        byte [][]partialSum = new byte[b.length][lengthOfPartialSum];
        byte [] newValue = new byte[b.length+a.length];
        for(int i=b.length-1,wiersz=0;i>=0;i--, wiersz++)
        {
            int part =lengthOfPartialSum-wiersz-1;
            for(int j=a.length-1;j>=0;j--,part--)
            {
                s=b[i]*a[j]+c;
                partialSum[wiersz][part]=(byte)(s%base);
                c=(byte)(s/base);
            }
            for(int rest_extension=part;part>=0;part--) {
                partialSum[i][rest_extension] = c;
            }
            //brak opcji w przypadku gdy któraś jest ujemna
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
        int size = java.lang.Math.max(a.length,b.length);
        byte extensionA=0, extensionB=0;
        if(a[0]>=base/2)
            extensionA=(byte)(base-1);
        if(b[0]>=base/2)
            extensionB=(byte)(base-1);
        if(extensionA!=extensionB){

            byte [] helpfulArrayA = new byte[a.length+1];
            byte [] helpfulArrayB = new byte[a.length+1];

            helpfulArrayA[0]=extensionA;
            for(int i=1;i<=a.length;i++){
                helpfulArrayA[i]=a[i-1];
            }

            helpfulArrayB[0]=extensionB;
            for(int i=1;i<=b.length;i++){
                helpfulArrayB[i]=b[i-1];
            }
            for(int i=b.length+1;i<=a.length;i++){
                helpfulArrayB[i]=0;
            }
            try {
                a = add(helpfulArrayA,helpfulArrayB,base);
            } catch (Exception e) {
                e.printStackTrace();
            }

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

        ///////do tego momentu jest ok


        for(int i=0;i<subASize;i++)
        {
            subArrayA[i]=a[i];
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
