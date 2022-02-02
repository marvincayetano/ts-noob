function Idontknow() {
  foo = "bar";
}
Idontknow();

console.log(foo); // Output: bar // Explanation: Hoisting
// HOISTING re declares var let on top
// CONST stays at the same line

var foo: any = "EY"; // Cannot redeclare block-scoped variable 'foo'.ts(2451)

console.log(foo); // EY

// var declarations are globally scoped or function scoped while let and const are block scoped.

// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
var fooRepeat = "foo";
var fooRepeat = "foo";

let letRepeat = "bar";
let letRepeat = "bar"; // Error // let can't be redeclared

// They are all hoisted to the top of their scope.
// But while var variables are initialized with undefined, let and const variables are not initialized.
