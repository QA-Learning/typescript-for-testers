export { }
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
const coordinates1: { lat: number, long1: number } = JSON.parse(locationJson);
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
  setStartedAt(year: number): void {
    this.startedAt = year;
  }
}

// Destructring
const { name }: { name: string } = college;
// the object type definition look like boiler plater, later we will discuss how to reduce this
const { address }: { address: { pincode: string, country: string } } = college;
console.log('address.country');
console.log(address.country);
console.log('address.pincode');
console.log(address.pincode);
