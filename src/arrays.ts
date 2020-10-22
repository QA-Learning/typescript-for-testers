const addition = (n1: number, n2: number) => n1 + n2;

const printer = (message: number = 111) => console.log(message);

printer(addition(11, 23))

const printing: (msg: number) => void = message => console.log(message);

printing(1)

printer()

// arrays and objects

const arrays = ['hello', 'world'];

const arrays2 = [...arrays, 'how are you?'];

console.log(arrays2);

const arrays3 = 'hello';

console.log(...arrays3);

const human = {
    name: 'srini',
    age: 12,
    roles: ['accounts', 'finance']
}

const employee = { ...human, department: 'IT' }
console.log(employee);

// array destructuring
const sports = ['cricket', 'football', 'chess']
const [sport1, sport2] = sports

console.log(sport1, sport2);







