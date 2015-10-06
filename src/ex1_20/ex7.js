"use strict";

let numUtils = require("../lib/numUtils");
let primeGenerator = numUtils.primeGenerator;

function nthPrime(n) {
    let i = 1;
    let gen = primeGenerator();
    while(i < n) {
        gen.next();
        i++;
    }
    return gen.next().value;
}

class ex7 {
    runTest() {
        return nthPrime(6);
    }

    runEx() {
        return nthPrime(10001);
    }

}

module.exports = ex7;