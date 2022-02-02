let foo: unknown = "Akshay";

let foo2: any = "Bar";

let bar: string = foo; // Type 'unknown' is not assignable to type 'string'.(2322)

let bar2: string = foo as string; // Narrowed down to string to work

foo2 = foo; // Any can hold unknown
foo = foo2; // Unknown can also hold any

let newString: string = foo2; // Any can be assign to any types
let newUnkown: unknown = bar2; // Unknown can't be assigned to any types
let narrowedNewUnkown: string = foo as string; // Unless we narrow down the unknown to the same type
