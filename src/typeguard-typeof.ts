type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
}

console.log('If both a and be are number: ' + add(2, 10));
console.log('If both a and be are string: ' + add('write test with ', 'typescript*'));
console.log('If one of them is number: ' + add(2, " is not a string"));