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

// Extract the literal sub-value:
function example<
  T extends { [key: string]: V },
  V extends string,
  // Moar generics!
  K extends keyof T
>(obj: T, key: K): T[K] {
  return obj[key];
}

// Returns "world"
example({ hello: "world" }, "hello");
