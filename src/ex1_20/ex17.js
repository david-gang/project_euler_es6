"use strict";

let numbers = {
  0:0,
  1:"one".length,
    2:"two".length,
    3:"three".length,
    4:"four".length,
    5:"five".length,
    6:"six".length,
    7:"seven".length,
    8:"eight".length,
    9:"nine".length,
    10:"ten".length,
    11:"eleven".length,
    12:"twelve".length,
    13:"thirteen".length,
    15:"fifteen".length,
    18: "eighteen".length,
    20: "twenty".length,
    30: "thirty".length,
    40: "forty".length,
    50: "fifty".length,
    60: "sixty".length,
    70: "seventy".length,
    80: "eighty".length,
    90: "ninety".length,
    1000: "onethousand".length
};

function numSmallerHundred(n) {
    if(n<=13 || n===15|| n===18) {
        return numbers[n];
    }
    else if(n<20) {
        let d = n%10;
        return "teen".length + numbers[d];
    }
    else {
        let d = n%10;
        let e = n - d;
        return numbers[e] + numbers[d];
    }
}

function numOfLetters(n) {
    if(n===1000) {
        return numbers[n];
    }
    let d = n%100;
    let e = (n-d)/100;
    let dLength = numSmallerHundred(d);
    if(e===0) {
        return dLength;
    }
    else {
        let eLength =  numSmallerHundred(e) + "hundred".length;
        if(dLength) {
            return eLength + "and".length + dLength;
        }
        else {
            return eLength;
        }

    }

}

function numOfLettersRange(n) {
    let sum =0;
    for(let i=1; i<=n;i++) {
        sum += numOfLetters(i);
    }
    return sum;
}
class ex17 {
    runTest() {
        return numOfLettersRange(5);
    }

    runEx() {
        return numOfLettersRange(1000);
    }

}

module.exports = ex17;