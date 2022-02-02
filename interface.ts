// An interface defines a contract by specifying the type of data an object can have and its operations.

interface Employee {
  name: string;
  salary: number;
}

function process(employee: Employee) {
  console.log(`${employee.name}'s salary = ${employee.salary}`);
}
