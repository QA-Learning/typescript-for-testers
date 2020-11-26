interface Greetable {
    readonly name: string; //Public or Private access modifiers cant be specified

    greet(phrase: string): void;
}

class Engineer implements Greetable {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(`${phrase}${name}`);
    }
}

let engineer = new Engineer('Mark')
engineer.greet('Hello');

engineer.name = 'srini';