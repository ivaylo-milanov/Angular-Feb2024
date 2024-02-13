import { Employee } from "./employee";

export class Junior extends Employee {
  constructor(name, age) {
    super(name, age, [` is working on a simple task`]);
  }
}
