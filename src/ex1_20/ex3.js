import {primeFactors}   from "../lib/numUtils";

function largestPrimeFactor(num) {
    let factors = primeFactors(num);
    return factors[factors.length - 1];
}

export default class ex3 {
    runTest() {
        return largestPrimeFactor(13195);
    }

    runEx() {
        return largestPrimeFactor(600851475143);
    }

}