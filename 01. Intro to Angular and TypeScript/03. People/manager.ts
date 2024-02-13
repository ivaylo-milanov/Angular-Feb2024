import { Employee } from "./employee";

export class Manager extends Employee {
  divident: number

  constructor(name, age, divident) {
    super(name, age, [
      ` scheduled a meeting`,
      ` is preparing a quarterly meeting`
    ]);

    this.divident = divident;
  }

  getSalary(): number {
    return this.salary + this.divident
  }
}