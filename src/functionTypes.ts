function print(message: string): string {
    return message;
}

console.log(print('hey im srini'));

function printMessage(message: string): void {
    console.log(message);
}

printMessage('return type of this fn is void')

let input: unknown;
input = 5;
input = 'hellooo';

console.log(typeof input);


function printError(message: string): never {
    throw new Error(message);
}

printError('this is a never type')
