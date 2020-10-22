"use strict";
function print(message) {
    return message;
}
console.log(print('hey im srini'));
function printMessage(message) {
    console.log(message);
}
printMessage('return type of this fn is void');
let input;
input = 5;
input = 'hellooo';
console.log(typeof input);
function printError(message) {
    throw new Error(message);
}
printError('this is a never type');
