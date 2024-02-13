"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box() {
        this._list = [];
    }
    Box.prototype.add = function (value) {
        this._list.push(value);
    };
    Box.prototype.remove = function () {
        this._list.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.Box = Box;
