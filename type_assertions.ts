let value: unknown = "Foo";
let len: number = (value as string).length;
let value: unknown = "Foo";
let len: number = (<string>value).length;
