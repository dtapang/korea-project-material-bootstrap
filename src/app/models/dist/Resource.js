"use strict";
exports.__esModule = true;
exports.Resource = void 0;
var Resource = /** @class */ (function () {
    function Resource(name, code, children, id) {
        this.name = name;
        this.code = code;
        this.children = children;
        this.id = id;
    }
    Resource.prototype.getId = function () {
        return this.id;
    };
    return Resource;
}());
exports.Resource = Resource;
