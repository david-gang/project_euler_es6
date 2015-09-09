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