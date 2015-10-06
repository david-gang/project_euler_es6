"use strict";

function getPitagorasTriplet() {
    for(let b =1; b<1000; b++) {
        let a = 1000 *(b - 500)/ (b-1000);
        if( a % 1 === 0) {
            let c = 1000-a - b;
            return a*b*c;
        }
    }
}

class ex9 {
       runEx() {
        return getPitagorasTriplet();
    }

}

module.exports = ex9;