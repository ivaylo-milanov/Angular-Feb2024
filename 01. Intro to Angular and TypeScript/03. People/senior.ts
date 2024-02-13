import { Employee } from "./employee";

export class Senior extends Employee {
  constructor(name, age) {
    super(name, age, [
      ` is working on a complicated task`,
      ` is taking time off work`,
      ` is supervising junior workers`,
    ]);
  }
}
