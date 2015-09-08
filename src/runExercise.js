"use strict";
import  {} from "babel/polyfill";

let args = process.argv.slice(2);

let num = args[0];

console.log(`Running exercise ${num}`);

let n = Math.floor(num/20);
let start = 20 * n + 1;
let end = 20 *(n+1);

let lib = `./ex${start}_${end}/ex${num}`;

let module = require(lib);

let ex = new module();

if(ex.runTest) {
    let testResult = ex.runTest();
    console.log(`The test result is ${testResult}`);
    console.log("Running exercise");
}

console.time("It took");
let exResult = ex.runEx();
console.log(`The exercise result is ${exResult}`);
console.timeEnd("It took");

