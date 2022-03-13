// An interface defines a contract by specifying the type of data an object can have and its operations.

interface Employee {
  name: string;
  salary: number;
}

function process(employee: Employee) {
  console.log(`${employee.name}'s salary = ${employee.salary}`);
}

export type User = unknown;

export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
