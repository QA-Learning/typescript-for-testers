const user = {
    id: '12',
    name: 'john',
    job: { title: 'IT', description: 'Information' }
}

console.log('====================================');
console.log(user.job && user.job.title);
console.log('====================================');


console.log('=======OPTIONAL CHAINING============');
console.log(user?.job?.title);
console.log('====================================');