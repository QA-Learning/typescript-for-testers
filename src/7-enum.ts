export { }

enum testDriver {
  chrome , // default value is zero
  firefox,
  edge
}


const creatDriver = (driver: testDriver)=> {
  console.log(`value of enum is ${driver}`)
};

creatDriver(testDriver.chrome);

/* JS way of doing the same 
const testDriverJs = { // This is an object
    chrome: "chrome",
    firefox: "firefox",
    edge: "edge"
}
creatDriver(testDriverJs.chrome) */
// enums can also be declared with values
enum testDriverString {
  chrome = "chrome",
  firefox = "firefox",
  edge = "edge"
}