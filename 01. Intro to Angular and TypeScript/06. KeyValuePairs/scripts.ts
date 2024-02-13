import { KeyValuePair } from "./KeyValuePair";

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve1");
console.log(kvp.display());
