export abstract class Employee {
 name: string
 age: number
 salary: number
 tasks: string[]

 constructor(name, age, tasks) {
  this.name = name;
  this.age = age;
  this.salary = 0;
  this.tasks = [...tasks];
 }

 work(): void {
  const currentTask: string | undefined = this.tasks.shift();
  this.tasks.push(currentTask as string);
  console.log(this.name + currentTask);
 }

 collectSalary(): void {
  console.log(`${this.name} received ${this.getSalary()} this month.`);
 }

 getSalary(): number {
  return this.salary;
 }
}