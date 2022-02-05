// Generics
// 'T' is going to be a type declared at run-time instead of compile time.
// The T variable could be any non-declared variable (I couldn't find a reference, but I would assume any valid set of characters that could be used for a variable names).
// Don't be scared of generics because it can be INFERED

// Literal types are true, false, 100, "foo"
export class Lodash<T extends object> {
  constructor(private obj: T) {}

  subset<K extends keyof T>(...keys: K[]): Lodash<Pick<T, K>> {
    return new Lodash(
      keys.reduce(
        (acc, key) => ({ ...acc, [key]: this.obj[key] }),
        {} as Pick<T, K>
      )
    );
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }
}

const obj = new Lodash({
  foo: "bar",
  bar: "baz",
  hello: "world",
});

obj.subset("foo", "bar").get("hello");
