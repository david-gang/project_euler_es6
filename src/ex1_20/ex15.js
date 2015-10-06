"use strict";

function comb(n) {
    let h = n/2;
    let nom = h+1;
    let den = 1;
    for(let i=2; i<=h; i++) {
        nom *=(h+i);
        den *=i;
    }
    return nom/den;

}
class ex15 {
    runTest() {
        return comb(2+2);
    }

    runEx() {
        return comb(20 + 20);
    }

}

module.exports = ex15;