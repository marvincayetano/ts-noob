// Similar to what we had with tagged types.
// You can use generics to create type constraints on classes.
// The generic value must be used somewhere in the class to create a constraint.
// Use `any` when you don't want to enforce a constraint.

const CHAINED: unique symbol = Symbol("chained");
class Lodash<T extends object, Chained extends boolean = false> {
  [CHAINED]: Chained;

  constructor(private obj: T) {}

  partial<K extends keyof T>(...keys: K[]): Lodash<Pick<T, K>, true> {
    // @ts-ignore Pretend that there is an implementation here.
    return;
  }
}

function logBareDash(lodash: Lodash<any, false>) {
  console.log(lodash);
}

logBareDash(new Lodash({ foo: "bar", bar: "baz" }));
logBareDash(new Lodash({ foo: "bar", bar: "baz" }).partial("bar")); // 💥
