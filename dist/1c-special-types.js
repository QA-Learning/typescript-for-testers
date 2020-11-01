"use strict";
// unknow type annotations
let i = 4;
console.log(`value of i is` + i); // 4
// console.log(`value of i is` + (i + 1)); // Object is of type 'unknown'.
// any inference
let x = {};
console.log(`value of i is ` + x); // 4
console.log(`value of i is ` + (x / 1)); // Object is of type 'unknown'
/*
Not very useful in typescript
*/
let lessUseful1 = undefined;
// lessUseful1 = "blah"; //Type '"blah"' is not assignable to type 'undefined'.
let lessUseful2 = null;
// lessUseful2 = 1; //Type '1' is not assignable to type 'null'.
