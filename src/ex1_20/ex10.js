import {primeGenerator}   from "../lib/numUtils";

function sumOfPrimesBelow(n) {
    let gen = primeGenerator();
    let prim = 0;
    let sum =0;
    while(prim < n) {
        sum += prim;
        prim = gen.next().value;
    }
    return sum;
}

export default class ex10 {
    runTest() {
        return sumOfPrimesBelow(10);
    }

    runEx() {
        return sumOfPrimesBelow(2000000);
    }

}