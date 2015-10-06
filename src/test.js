"use strict";

var assert = require("assert");
describe('run all exercises', function() {
    describe('run all exercises', function () {

            let exercises = [
                {num:1, res:[233168, 23]},
                {num:2, res:[4613732]},
                {num:3, res:[6857, 29]},
                {num:4, res:[906609, 9009]},
                {num:5, res:[232792560, 2520]},
                {num:6, res:[25164150, 2640]},
                {num:7, res:[104743, 13]},
                {num:8, res:[23514624000, 5832]},
                {num:9, res:[31875000]},
                {num:10, res:[142913828922, 17]},
                {num:11, res:[70600674]},
                {num:12, res:[76576500,28]},
                {num:13, res:[5.53737623]},
                {num:14, res:[837799, 10]}
            ];
            exercises.forEach(function(test) {
                it(`exercise test.num`, function() {
                    console.log('runnning '+test.num);
                    var res = runTest.apply(null, [test.num,test.res]);
                });
            });

    });
});


function runTest(num, res) {
    let n = Math.floor(num/20);
    let start = 20 * n + 1;
    let end = 20 *(n+1);

    let lib = `./ex${start}_${end}/ex${num}`;

    let mod = require(lib);

    let ex = new mod();
    if(ex.runTest) {
        let testResult = ex.runTest();
        assert.equal(testResult, res[1]);
    }

    let exResult = ex.runEx();
    assert.equal(exResult, res[0]);

}