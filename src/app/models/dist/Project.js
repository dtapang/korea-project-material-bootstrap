"use strict";
exports.__esModule = true;
exports.Project = void 0;
var Project = /** @class */ (function () {
    function Project(name, code, children, id) {
        this.name = name;
        this.code = code;
        this.children = children;
        this.id = id;
    }
    Project.prototype.getId = function () {
        return this.id;
    };
    return Project;
}());
exports.Project = Project;
