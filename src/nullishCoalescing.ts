const storedData = null;

const result1 = storedData || 'defaultvalue';

console.log('====================================');
console.log(result1);
console.log('====================================');

const result2 = storedData ?? 'defaultvalue';

console.log('================NULLISH COALESCING===============');
console.log(result2);
console.log('=================================================');