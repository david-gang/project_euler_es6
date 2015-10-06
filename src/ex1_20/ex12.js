"use strict";

let numUtils = require("../lib/numUtils");
let primeFactorsMap = numUtils.primeFactorsMap;

function *triangleNumber() {
    let i = 2;
    let triangle = 1;
    while (true) {
        triangle = triangle + i;
        i++;
        yield triangle;
    }
}
function smallestNumberWithDivisorsOver(n) {
    let gen = triangleNumber();
    for(let i of gen) {

        let primeMap = primeFactorsMap(i);
        let prod = 1;
        for(let v of primeMap.values()) {
            prod = prod * (v+1);
        }

        if(prod > n) {
            return i;
        }


    }
}

class ex12 {
    runTest() {
        return smallestNumberWithDivisorsOver(5);
    }

    runEx() {
        return smallestNumberWithDivisorsOver(500);
    }

}

module.exports = ex12;
