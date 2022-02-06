// Getting the literal "world" value instead of `string`:
function example<
  T extends { [key: string]: V },
  // Add another generic!
  V extends string
>(arg: T) {}

// T will be `{ hello: 'world' }`
example({
  hello: "world",
});
