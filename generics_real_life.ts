// Get the value of key
class Lodash<T extends object> {
  constructor(private obj: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }
}

let obj = new Lodash({
  foo: "bar",
  bar: 123,
});

obj.get("foo"); // typeof string
obj.get("bar"); // typeof number
// There's no hello property
obj.get("hello"); // 💥
