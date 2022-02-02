interface Coordinate {
  readonly x: number;
  readonly y: number;
}

let c: Coordinate = { x: 5, y: 15 };
c.x = 20; // Cannot assign to 'x' because it is a read-only property.(2540)
