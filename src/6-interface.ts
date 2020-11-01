export { }
interface Address {
  pincode: number;
  country: string;
}

interface College {
  name: string;
  departments: string[];
  code: number;
  address: Address;
  startedAt: number;
  setStartedAt(year: number): void;
}

const college = {
  name: 'abc college',
  departments: ['ECE', 'CSE', 'CIVIL'],
  code: 1013,
  address: {
    pincode: 531004,
    // pincode: '531004', // will throw error in logAddress as type mismatch
    country: 'india',
    // line: "test"
  },
  startedAt: -1,
  setStartedAt(year: number): void {
    this.startedAt = year;
  }
}


let logAddress
logAddress = (address: Address) => {
  console.log(`pindcode is ${address.pincode}`);
  console.log(`country is ${address.country}`);
}

logAddress(college.address);

console.log(college.startedAt)
college.setStartedAt(1991);
console.log(college.startedAt)