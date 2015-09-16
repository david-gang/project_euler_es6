
function collatzLength(n) {
    let i = 1;
    while(n>1) {

        i++;

        if(n%2) {
            n = 3*n+1;
        }
        else {
            n = n/2;
        }
    }
    return i;
}
export default class ex14 {
    runTest() {
        return collatzLength(13);
    }

    runEx() {
        let length = 0
        let index = 0;
        for(let i = 13; i<1000000; i++) {
            let l = collatzLength(i);
            if(length<l) {
                length = l;
                index = i;
            }
        }
        return index;
    }

}