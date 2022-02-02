// How enums work in TypeScript?
// Enums allow us to create named constants. It is a simple way to give more friendly names to numeric constant values.

enum Team {
  Alpha,
  Beta,
  Gamma,
  Delta,
}

// By default, the enums start the numbering at 0. You can override the default numbering by explicitly assigning the values to its members.
// I think if you explicitly assign the first one with 1
// it will increment it to the rest

let t: Team = Team.Delta;

// ENUMS can be string too
// Think of this as a variable
enum Author {
  Anders = "Anders",
  Hejlsberg = "Hejlsberg",
}
