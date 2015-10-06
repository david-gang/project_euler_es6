"use strict";

function isPalindrome(num) {
    var arr = num.toString().split('');
    var half = Math.floor(arr.length/2);
    var lastIndex = arr.length -1;
    for(let i =0; i<half; i++) {
        if(arr[i] !== arr[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
function findLargestPalindrome(n) {
    let high = Math.pow(10,n) - 1;
    let low = Math.pow(10,n-1);

    let palindrome = -1;
    for(let i=high; i>=low;i--) {
        for (let j = i; j >= low; j--) {
            let prod = i*j;
            if(isPalindrome(prod) && prod > palindrome) {
                palindrome = prod;
                low = j;
            }

        }
    }
    return palindrome;
}


class ex4 {
    runTest() {
        return findLargestPalindrome(2);
    }

    runEx() {
        return findLargestPalindrome(3);
    }

}

module.exports = ex4;