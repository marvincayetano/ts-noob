// What is undefined in TypeScript?
// When a variable is declared without initialization, it’s assigned the undefined value.
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(null == undefined); // true, with type-conversion
console.log(null === undefined); // false, without type-conversion
console.log(0 == undefined); // false
console.log("" == undefined); // false
console.log(false == undefined); // false
