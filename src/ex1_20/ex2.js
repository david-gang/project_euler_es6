function sumEvenFibSmallerThan(num) {
    let sum = 0;
    for (let x of evenFibSmallerThan(num)) {
        sum += x;
    }
    return sum;
}

function  *evenFibSmallerThan(num) {
    let fib = 0;
    let g = fibGen();
    while(fib<num) {
        fib = g.next().value;
        if(fib%2 ===0) {
            yield fib;
        }
    }

}

function *fibGen() {
    let i = 1;
    let n_2 = 1;
    let n_1 = 2;
    while (true) {
        if (i === 1) {
            yield 1;
        }
        else if (i == 2) {
            yield 2;
        }
        else {
            let n = n_1 + n_2;
            n_2 = n_1;
            n_1 = n;
            yield n;
        }
        i++;

    }
}

export default class ex2 {
    runEx() {
        return sumEvenFibSmallerThan(4000000);
    }

}