"use strict";

let numUtils = require("../lib/numUtils");
let primeFactors = numUtils.primeFactors;

function largestPrimeFactor(num) {
    let factors = primeFactors(num);
    return factors[factors.length - 1];
}

class ex3 {
    runTest() {
        return largestPrimeFactor(13195);
    }

    runEx() {
        return largestPrimeFactor(600851475143);
    }

}

module.exports = ex3;