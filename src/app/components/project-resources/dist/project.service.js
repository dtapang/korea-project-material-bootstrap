"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.url = "http://localhost:8080/korea";
        this.ProjectItem = "/projects/" + this.id;
        this.ProjectItems = "/projects";
        this.ProjectSearchItems = "/projects/search";
        this.AddProjectItem = "/projects";
        this.UpdateProjectItem = "/projects";
    }
    ProjectService.prototype.getall = function () {
        return this._get("" + this.url + this.ProjectItems);
    };
    ProjectService.prototype._get = function (url) {
        return this.http.get(url)
            .pipe(operators_1.map(function (res) { return res; }));
    };
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
