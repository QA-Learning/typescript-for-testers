"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
When the type any is possible
*/
const locationJson = '{"lat":10,"long1":"dummy"}';
const coordinates = JSON.parse(locationJson);
console.log(coordinates);
console.log(coordinates.lat);
console.log(coordinates.dummy);
/*
How we can mitigate type any is shortcommings
*/
const coordinates1 = JSON.parse(locationJson);
// console.log(coordinates1);
// console.log(coordinates1.lat);
// console.log(coordinates1.dummy);
const college = {
    name: 'abc college',
    departments: ['ECE', 'CSE', 'CIVIL'],
    code: 1013,
    address: {
        pincode: '531004',
        country: 'india'
    },
    startedAt: -1,
    setStartedAt(year) {
        this.startedAt = year;
    }
};
// Destructring
const { name } = college;
const { address } = college;
console.log('address.country');
console.log(address.country);
console.log('address.pincode');
console.log(address.pincode);
