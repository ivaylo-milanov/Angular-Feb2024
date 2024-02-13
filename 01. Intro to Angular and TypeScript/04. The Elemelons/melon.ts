export abstract class Melon {
  private _weight: number
  private _melonSort: string
  private _element: string

  constructor(weight: number, melonSort: string, element: string = 'Water') {
    this._weight = weight;
    this._melonSort = melonSort;
    this._element = element;
  }

  public get weight() {
    return this._weight;
  }

  protected set weight(value: number) {
    if (value <= 0) {
      throw new Error('The weight is invalid');
    }

    this._weight = value;
  }

  public get melonSort() {
    return this._melonSort;
  }

  protected set melonSort(value: string) {
    if (value.length === 0 || value === '' || value === null) {
      throw new Error('The melonSort is invalid.');
    }

    this._melonSort = value;
  }

  private get elementIndex() {
    return this._weight * this._melonSort.length;
  }

  public get element() {
    return this._element;
  }

  protected set element(value: string) {
    this._element = value;
  }

  public toString(): void {
    console.log(`Element: ${this.element}\nSort: ${this._melonSort}\nElement Index: ${this.elementIndex}`);
  }
}