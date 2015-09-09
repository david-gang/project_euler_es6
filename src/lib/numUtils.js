export function primeFactors(num) {

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
}

function isPrime(num, primes) {
    for(let prime of primes) {
        if((num % prime) ==0) {
            return false;
        }
    }
    return true;
}
export function *primeGenerator() {
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