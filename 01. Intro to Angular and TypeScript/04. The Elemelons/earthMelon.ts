import { Melon } from "./melon";

export class EarthMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort, 'Earth');
  }
}