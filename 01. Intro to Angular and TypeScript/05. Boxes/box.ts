export class Box<T> {
  private _list: T[]

  constructor() {
    this._list = [];
  }

  public add(value: T) {
    this._list.push(value);
  }

  public remove() {
    this._list.pop();
  }

  public get count(): number {
    return this._list.length;
  }
}