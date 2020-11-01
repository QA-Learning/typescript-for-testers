/*
Here "i:number" implies that the argument "i" should be a number
and ": void" implies that the return type should be void
*/
const logNumber = function (i: number): void {
  console.log(i);
};

logNumber(1);

/*
Here "i:number" implies that the argument "i" should be a number
and ": void" implies that the return type should be void
*/
const square = (i: number): number => {
  return i * i;
};

console.log(square(5));
// console.log(square("typescript")) -> Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)