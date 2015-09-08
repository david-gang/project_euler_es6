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