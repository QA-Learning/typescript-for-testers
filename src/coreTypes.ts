function add(number1: number | string, number2: number | string): number | string {  // union types
    if (typeof number1 === "number" && typeof number2 === "number") {
        return number1 + number2;
    }
    return number1.toString() + number2.toString();
}

add(5, 3)
add(2, 1)

console.log(add(4, 9))
console.log(add('hi', 'hello'));

enum department {
    IT = 5,
    ADMIN = 20,
    FINANCE
}

type Person = {                     // object
    name: string;
    age: number;
    hobbies: string[];              // array
    company: {                      // nested object
        name: string;
    };
    roles: [number, string];        // tuples
    department: department;
    message: string | number;
    type: 'employee' | 'owner';     // literal type
}

const person: Person = {
    name: 'Mohish',
    age: 12,
    hobbies: ['music', 'cricket'],
    company: {
        name: 'TCS'
    },
    roles: [2, 'author'],
    department: department.ADMIN,
    message: 'hello',
    type: 'employee'
}

console.log(person.company.name);
console.log(`Here is an example of arrays in TS ${person.hobbies}`);

let favoriteSporting: string[];
favoriteSporting = ['soccer', 'cricket']

console.log(`Here is an example of arrays in TS ${favoriteSporting}`);

console.log(`Here is an example of enum in TS ${person.department}`);

console.log(`Here is an example of tuples in TS ${person.roles}`);

console.log(`Here is an example of union types in TS ${person.message}`);

person.message = 4;

console.log(`Here is an example of union types in TS ${person.message}`);

console.log(`Here is an example of literal types in TS ${person.type}`);

///// type alias
type stringOrBoolean = String | boolean
const article: stringOrBoolean = 'hello'
console.log(typeof article);





