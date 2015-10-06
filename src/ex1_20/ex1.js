"use strict";

function *generateDivider(num) {
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            yield i;
        }

    }
}

function sumDivider(num) {
    let sum = 0;
    for (let x of generateDivider(num)) {
        sum += x;
    }
    return sum;
}
class ex1 {
    runTest() {
        return sumDivider(10);
    }

    runEx() {
        return sumDivider(1000);
    }

}

module.exports = ex1;
