class Animal{
  legs: number = 4;
}

class Dog extends Animal{
  sound: string = "bark";
  bark() {
    console.log("wow wow wow")
  }
}


let a: Animal = new Animal;
// a.bark();
let b = a as Dog;
// b.bark();


// let someValue: unknown = "this is a string";
let someValue: unknown = 1;

let strLength: number = (someValue as string).length;

console.log(strLength);