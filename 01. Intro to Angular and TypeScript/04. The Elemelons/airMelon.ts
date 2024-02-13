import { Melon } from "./melon";

export class AirMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort, 'Air');
  }
}