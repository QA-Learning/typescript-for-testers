// non-primitive type are number, string, boolean
export { };

// Array
// type annotations
let ageOfKids: number[];
ageOfKids = [1, 2, 4, 5, 6];
let childNames: string[];
childNames = ['Charles', 'Ram', 'Abdul'];

// type inference
let ageOfAdults = [21, 22, 24, 25, 26];
let adultName = ['Darwin', 'Nath', 'Kader'];

// objects
let location: { latitude: number, longitude: number }
location = {
  latitude: 101,
  longitude: 280
}

let point = {
  x: -10,
  y: +200
} 