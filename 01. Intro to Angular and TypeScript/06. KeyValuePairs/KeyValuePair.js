"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePair = void 0;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this._key = key;
        this._value = value;
    };
    KeyValuePair.prototype.display = function () {
        return "key = ".concat(this._key, ", value = ").concat(this._value);
    };
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
