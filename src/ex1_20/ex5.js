import {primeFactors}   from "../lib/numUtils";


function createPrimeMap(num) {
    let arr = primeFactors(num);
    let multiple = new Map();
    for(let j of arr) {
        if(!multiple.has(j)) {
            multiple.set(j,1);
        }
        else {
            multiple.set(j,multiple.get(j)+1);
        }

    }

    return multiple;
}

function mergeMaps(map1, map2) {
    for (let [key, value] of map2.entries()) {
        if(!map1.has(key) || map1.get(key) <value ) {
            map1.set(key,value);
        }
    }
}
function smallestMultiple(num) {
    let commonMultiple = new Map();
    for(let i=2;i<num;i++) {
        let multiple = createPrimeMap(i);
        mergeMaps(commonMultiple, multiple);
    }
    let product = 1;
    for (let [key, value] of commonMultiple.entries()) {
        product *= Math.pow(key, value);
    }
    return product;
}

export default class ex4 {
    runTest() {
        return smallestMultiple(10);
    }

    runEx() {
        return smallestMultiple(20);
    }

}