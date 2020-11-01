/*
Function requires type annotation always
Here "i:number" implies that the argument "i" should be a number
and ": void" implies that the return type should be void
*/
let logNumber: (i: number) => void; // similar to setting of abstract method
// then declaring the function
logNumber = function (i) {
  console.log(i);
};

logNumber(5);
// logNumber("typescript"); // will throw an error

/*
Here "i:number" implies that the argument "i" should be a number
and ": number" implies that the return type should be of type number
Here the function is doing type inference
*/
const square = (i: number): number => {
  return i * i;
};

console.log(square(5));
// console.log(square("typescript")) // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)