"use strict";

let BigInteger = require("../lib/BigInteger");
function sumOfDigits(n) {
    let i = new BigInteger(1);
    let two = new BigInteger(2);
    for(let j =0;j<n;j++) {
        i = i.multiply(two);
    }
    return i.arr.reduce((a,b)=>a+b);

}
class ex16 {
    runTest() {
        return sumOfDigits(15);
    }

    runEx() {
        return sumOfDigits(1000);
    }

}

module.exports = ex16;