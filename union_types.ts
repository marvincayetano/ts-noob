// A union type is a special construct in TypeScript that indicates that a value can be one of several types. A vertical bar (|) separates these types.
let value: string | number = "Foo";
value = 10; // Okay

value = true; // Type 'boolean' is not assignable to type 'string | number'.(2322)
