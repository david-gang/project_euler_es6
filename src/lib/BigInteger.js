"use strict";

class BigInteger {

    constructor(n){
        if(n.constructor === Array) {
            this.arr = n.slice(0);
        }
        else if(n){
            this.arr = n.toString().split("").reverse().map(e=>parseInt(e));
        }
        else {
            this.arr = [0];
        }
    }
    add(n) {
        let thisLength = this.arr.length;
        let otherLength = n.arr.length;
        let common = Math.min(thisLength, otherLength);
        let over = 0;
        let arr1 = [];
        for(let i=0; i<common; i++) {
            let j = this.arr[i] + n.arr[i] + over;
            let k = j%10;
            arr1[i] = k;
            over = (j-k)/10;
        }
        if(thisLength === otherLength) {
            return new BigInteger(arr1);
        }
        let arr;
        if(thisLength< otherLength) {
            arr = n.arr;
        }
        else {
            arr = this.arr;
        }
        for(let i=common; i<arr.length; i++) {
            let j = arr[i] + over;
            let k = j%10;
            arr1[i] = k;
            over = (j-k)/10;
        }

        return new BigInteger(arr1);
    }
    multiply(n){
        let sumOfNum = new BigInteger(0);
        for(let i = 0;i<this.arr.length; i++) {
            let arr1 = [];
            for(let x = 0;x<i;x++) {
                arr1.push(0);
            }
            let over = 0;
            for(let x = 0; x<n.arr.length; x++) {
                let j = this.arr[i]*n.arr[x] + over;
                let k = j%10;
                arr1[x+i] = k;
                over = (j-k)/10;
            }
            if(over) {
                arr1.push(over);
            }

            sumOfNum = sumOfNum.add(new BigInteger(arr1));
        }

        return sumOfNum;
    }

}

module.exports = BigInteger;