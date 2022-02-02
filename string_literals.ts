let foo: "bar" = "bar";

// OK
foo = "bar";

// Error: Type '"baz"' is not assignable to type '"bar"'.(2322)
foo = "baz";

// THIS DOESNT MAKE SENSE

// BUT THIS ONE IS GREAT
function greet(name: string, greeting: "hi" | "hello" | "hola") {
  // ...
}
