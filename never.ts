// Purpose of the never type in TypeScript.
// As the name suggests, the never type represents the type of values that never occur.
function errorThatReturnsUndefined(message: string): void {
  console.log("Hahe", message);
}

function error(message: string): never {
  throw new Error(message);
}

// Function that has no return still returns undefined
// But if we add never as a return type it doesn't return anything

// In contrast, a function that has a never return type never returns. It doesn't return undefined, either. There are 2 cases where functions should return never type:

// In an unending loop e.g a while(true){} type loop.
// A function that throws an error e.g function foo(){throw new Exception('Error message')}

const whatIs = errorThatReturnsUndefined("what now");

// console.log(whatIs); // Returns undefined

const whatNow = error("what meow");

console.log(typeof whatNow); // This doesn't even return anything
