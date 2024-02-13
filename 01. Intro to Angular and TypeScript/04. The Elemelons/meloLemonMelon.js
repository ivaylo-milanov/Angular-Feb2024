"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = void 0;
var melon_1 = require("./melon");
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Melolemonmelon.prototype.morph = function () {
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
    };
    return Melolemonmelon;
}(melon_1.Melon));
exports.Melolemonmelon = Melolemonmelon;
