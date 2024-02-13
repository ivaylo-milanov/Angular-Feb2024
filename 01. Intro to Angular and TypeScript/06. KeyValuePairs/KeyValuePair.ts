export class KeyValuePair<TKey, TValue> {
  private _key: TKey;
  private _value: TValue;

  public setKeyValue(key: TKey, value: TValue): void {
    this._key = key;
    this._value = value;
  }

  public display() {
    return `key = ${this._key}, value = ${this._value}`;
  }
}