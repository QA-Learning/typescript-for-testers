import { args } from './types';

function sum({firstArg, secondArg}: args) {
    return firstArg + secondArg;
}

console.log(sum({firstArg: 5, secondArg: 10}));


/* * To Create declaration file while compiling - 
   * tsc typedeclaratio.ts --declaration
   */