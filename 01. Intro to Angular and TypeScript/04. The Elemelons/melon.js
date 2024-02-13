"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort, element) {
        if (element === void 0) { element = 'Water'; }
        this._weight = weight;
        this._melonSort = melonSort;
        this._element = element;
    }
    Object.defineProperty(Melon.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error('The weight is invalid');
            }
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Melon.prototype, "melonSort", {
        get: function () {
            return this._melonSort;
        },
        set: function (value) {
            if (value.length === 0 || value === '' || value === null) {
                throw new Error('The melonSort is invalid.');
            }
            this._melonSort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this._weight * this._melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Melon.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: false,
        configurable: true
    });
    Melon.prototype.toString = function () {
        console.log("Element: ".concat(this.element, "\nSort: ").concat(this._melonSort, "\nElement Index: ").concat(this.elementIndex));
    };
    return Melon;
}());
exports.Melon = Melon;
