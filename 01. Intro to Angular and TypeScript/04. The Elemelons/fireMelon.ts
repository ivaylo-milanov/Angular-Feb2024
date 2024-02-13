import { Melon } from "./melon";

export class FireMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort, 'Fire');
  }
}