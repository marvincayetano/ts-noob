// We can generalize the tag concept using a generic.

// By leveraging a module-scoped symbol here, we create the type constraint, but don't leak it out,
// so it's essentially invisible when using the type.

// Remember symbols are always unique? Unique memory location
const tag: unique symbol = Symbol("tag");

type Tag<Name extends string> = {
  [tag]: Name;
};

type Name = string & Tag<"name">;
type Email = string & Tag<"email">;

let name = "Jordan" as Name;

// Useful for models
type Name = string & Tag<"name">;
type Email = string & Tag<"email">;
type Age = number & Tag<"age">;

class User {
  name: Name;
  email: Email;
  age: Age;

  constructor(name: string, email: string, age: number) {
    this.name = name as Name;
    this.email = email as Email;
    this.age = age as Age;
  }
}
