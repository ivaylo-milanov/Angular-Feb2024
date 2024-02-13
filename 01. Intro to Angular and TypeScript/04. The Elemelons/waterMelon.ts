import { Melon } from "./melon";

export class WaterMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort, 'Water');
  }
}