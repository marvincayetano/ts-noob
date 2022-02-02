// Abstract classes are similar to interfaces in that
// they specify a contract for the objects, and you cannot instantiate them directly.
// However, unlike interfaces,
// an abstract class may provide implementation details for one or more of its members.
abstract class Writer {
  abstract write(): void;

  greet(): void {
    console.log("Hello, there. I am a writer.");
  }
}

class FictionWriter extends Writer {
  write(): void {
    console.log("Writing a fiction.");
  }
}

class RomanceWriter extends Writer {
  write(): void {
    console.log("Writing a romance novel.");
  }
}

// This is basically a parent class in Java
// Remember super()? = initializes the parent class with params
