// noImplicitAny is a compiler option that you set in the tsconfig.json file.
// Parameter 's' implicitly has an 'any' type.(7006)
function parse(s) {
  console.log(s.split(" ")); // [ERR]: s.split is not a function
}
