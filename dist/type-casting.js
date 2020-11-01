"use strict";
class Animal {
    constructor() {
        this.legs = 4;
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.sound = "bark";
    }
    bark() {
        console.log("wow wow wow");
    }
}
let a = new Animal;
// a.bark();
let b = a;
// b.bark();
// let someValue: unknown = "this is a string";
let someValue = 1;
let strLength = someValue.length;
console.log(strLength);
