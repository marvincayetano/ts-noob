// Stash a type under a unique symbol to use it elsewhere
// Export the symbols in your main module, to expose to the user

const FOO_TYPE: unique symbol = Symbol("foo type");
class Foo<T = any> {
  // Stash the type for later:
  [FOO_TYPE]: T;
}

Foo[typeof FOO_TYPE]; // Gets the stashed type.

function createBar<T extends Foo>(foo: T) {
  return new Bar<T[typeof FOO_TYPE]>();
}
