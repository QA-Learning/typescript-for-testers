// unknow type annotations
let i: unknown = 4;
console.log(`value of i is` + i); // 4
<<<<<<< HEAD
// console.log(`value of i is` + (i + 1)); // Object is of type 'unknown'.ts(
=======
// console.log(`value of i is` + (i + 1)); // Object is of type 'unknown'.
>>>>>>> Add type inference to functions and special types - Bharathan

// any inference
let x: any = {};
console.log(`value of i is ` + x); // 4
console.log(`value of i is ` + (x / 1)); // Object is of type 'unknown'


/*
Not very useful in typescript
*/
let lessUseful1: undefined = undefined;
// lessUseful1 = "blah"; //Type '"blah"' is not assignable to type 'undefined'.
let lessUseful2: null = null;
// lessUseful2 = 1; //Type '1' is not assignable to type 'null'.
