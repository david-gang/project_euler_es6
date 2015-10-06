"use strict";

exports.primeFactors = function(num) {

    let res = [];
    let n = 2;
    while (num > 1) {
        while(num%n ===0) {
            res.push(n);
            num = num/n;
        }
        n++;

    }
    return res;
};


exports.primeFactorsMap = function(num) {
   let res = exports.primeFactors(num);
    let multiple = new Map();
    for(let j of res) {
        if(!multiple.has(j)) {
            multiple.set(j,1);
        }
        else {
            multiple.set(j,multiple.get(j)+1);
        }

    }

    return multiple;
};

function isPrime(num, primes) {
    let root = Math.sqrt(num);
    if(root %1 === 0) {
        return false;
    }
    for(let prime of primes) {
        if(prime > root) {
            break;
        }
        if((num % prime) ==0) {
            return false;
        }
    }
    return true;
}
function *primeGenerator() {
    let primes = [];
    let num = 2;
    while(true) {
        if(isPrime(num,primes)){
            primes.push(num);
            yield num;
        }
        num++;
    }
}

exports.primeGenerator = primeGenerator;