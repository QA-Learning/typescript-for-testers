"use strict";
class Engineer {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase}${name}`);
    }
}
let engineer = new Engineer('Mark');
engineer.greet('Hello');
engineer.name = 'srini';
