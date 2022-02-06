// This lets us create types that are more constrained.
// Are not assignable without explicitly defining as the tagged type.

// This is intersection
type Name = string & { __tag: "name" };

let myName = "Jordan" as Name;
// Error because of "as" ?? Maybe
myName = "Not Jordan"; // 💥
