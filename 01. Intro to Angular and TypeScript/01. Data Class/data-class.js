"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return Data;
}());
exports.Data = Data;
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
