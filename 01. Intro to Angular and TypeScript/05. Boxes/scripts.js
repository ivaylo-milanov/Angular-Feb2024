"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = require("./box");
var box = new box_1.Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
