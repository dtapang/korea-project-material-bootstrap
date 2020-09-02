"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectResourcesService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProjectResourcesService = /** @class */ (function () {
    function ProjectResourcesService(http) {
        this.http = http;
        this.values = [];
        this.subject = new rxjs_1.Subject();
        this.url = "http://localhost:8080/korea";
        this.ProjectResource = "/prd/find/" + this.id;
        this.ProjectResourcesItems = "/prd/listByProject/" + this.id; ///prd/listByProject/{id}
        this.AddProjectResourceItem = "/prd";
        this.DeleteProjectResourceItem = "/prd/delete/" + this.id;
        this.options = {
            observe: "response"
        };
    }
    ProjectResourcesService.prototype.sendMessage = function (prSet, projectId) {
        var _this = this;
        prSet.forEach(function (pr) {
            _this.values.push(pr);
        });
        this.subject.next(this.values);
    };
    ProjectResourcesService.prototype.clearMessage = function () {
        this.subject.next();
    };
    ProjectResourcesService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    ProjectResourcesService.prototype.getList = function () {
        return this.values;
    };
    ProjectResourcesService.prototype.getall = function () {
        return this._get("" + this.url + this.ProjectResourcesItems);
    };
    ProjectResourcesService.prototype["delete"] = function (id) {
        this.id = id;
        return this._delete("" + this.url + this.DeleteProjectResourceItem);
    };
    ProjectResourcesService.prototype._get = function (url) {
        return this.http.get(url);
    };
    ProjectResourcesService.prototype._delete = function (url) {
        return this.http["delete"](url);
    };
    ProjectResourcesService.prototype.createNew = function (resource, projectId) {
        this.id = projectId;
        return this.http.post("" + this.url + this.AddProjectResourceItem, resource, this.options);
    };
    ProjectResourcesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.Injectable()
    ], ProjectResourcesService);
    return ProjectResourcesService;
}());
exports.ProjectResourcesService = ProjectResourcesService;
