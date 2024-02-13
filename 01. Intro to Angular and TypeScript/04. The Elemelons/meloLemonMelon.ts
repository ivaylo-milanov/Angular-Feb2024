import { Melon } from "./melon";

export class Melolemonmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  morph(): void {
    if (this.element === 'Fire') {
      this.element = 'Earth';
    }

    if (this.element === 'Earth') {
      this.element = 'Air';
    }

    if (this.element === 'Air') {
      this.element = 'Water';
    }

    if (this.element === 'Water') {
      this.element = 'Fire';
    }
  }
}