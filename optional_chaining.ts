let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
// Can be express as below
let x = foo?.bar.baz();
