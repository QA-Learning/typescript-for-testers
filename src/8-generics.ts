export { }

interface Identities<V> {
  id1: V,
  id2: number
}
function countCharacters<T,U>(arg1: T): Identities<T> {
  console.log(arg1 + ": " + typeof (arg1));
  let count = 0;
  if(typeof (arg1)=="string"){
     count = arg1.length;
  } else if (typeof (arg1) == "number"){
    count = arg1.toString.length;
  }
  let identities = {
    id1: arg1,
    id2: count
  };
  return identities;
}

console.log(`the object is ${countCharacters("Typescript").id1}`)
console.log(`the object is ${countCharacters("bharatha").id2}`)
console.log(`the object is ${countCharacters(1234).id1}`)
console.log(`the object is ${countCharacters(1234).id2}`)