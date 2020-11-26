"use strict";
var _a;
const user = {
    id: '12',
    name: 'john',
    job: { title: 'IT', description: 'Information' }
};
console.log('====================================');
console.log(user.job && user.job.title);
console.log('====================================');
console.log('=======OPTIONAL CHAINING============');
console.log((_a = user === null || user === void 0 ? void 0 : user.job) === null || _a === void 0 ? void 0 : _a.title);
console.log('====================================');
