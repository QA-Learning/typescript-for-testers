// unknow type annotations
let i: unknown = 4;
console.log(`value of i is` + i); // 4
// console.log(`value of i is` + (i + 1)); // Object is of type 'unknown'.ts(

// any inference
let x: any = {};
console.log(`value of i is ` + x); // 4
console.log(`value of i is ` + (x / 1)); // Object is of type 'unknown'.ts(


/*
Not very useful in typescript
*/
let lessUseful1: undefined = undefined;
// lessUseful1 = "blah"; //Type '"blah"' is not assignable to type 'undefined'.
let lessUseful2: null = null;
// lessUseful2 = "blah"; Type '"blah"' is not assignable to type 'null'.

const locationJson = '{"lat":10,"long1":"dummy"}';
const coordinates = JSON.parse(locationJson);
// const coordinates: {lat: number, long1: number} = JSON.parse(locationJson);
console.log(coordinates);
console.log(coordinates.lat);
console.log(coordinates.dummy);

