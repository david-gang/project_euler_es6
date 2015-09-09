import {primeGenerator}   from "../lib/numUtils";

function nthPrime(n) {
    let i = 1;
    let gen = primeGenerator();
    while(i < n) {
        gen.next();
        i++;
    }
    return gen.next().value;
}

export default class ex7 {
    runTest() {
        return nthPrime(6);
    }

    runEx() {
        return nthPrime(10001);
    }

}