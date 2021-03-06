"use strict";

function squareSumMinusSumSquare(n) {
    let sum = n*(n+1)/2;
    return sum*(sum - (2*n+1)/3)
}

class ex6 {
    runTest() {
        return squareSumMinusSumSquare(10);
    }

    runEx() {
        return squareSumMinusSumSquare(100);
    }

}
module.exports = ex6;