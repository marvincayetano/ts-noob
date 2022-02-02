interface Employee {
  work: () => string;
}

interface Manager {
  manage: () => string;
}

type Supervisor = Employee & Manager;
// I actually didnot know this

// Is this the same as this
interface SupervisorWhat extends Employee, Manager {}

// john can both work and manage
let john: Supervisor;
