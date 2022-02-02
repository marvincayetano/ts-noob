// Declare a tuple type and initialize it
let values: [string, number] = ["Foo", 15];

// Type 'boolean' is not assignable to type 'string'.(2322)
// Type 'string' is not assignable to type 'number'.(2322)
let wrongValues: [string, number] = [true, "hello"]; // Error
// USESTATE RETURNS A TUPLE!

// Since TypeScript 3.0, a tuple can specify one or more optional types using the ? as shown below.
let values: [string, number, boolean?] = ["Foo", 15];
