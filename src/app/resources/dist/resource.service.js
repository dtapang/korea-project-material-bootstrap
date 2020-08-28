"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResourceService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var ResourceService = /** @class */ (function () {
    function ResourceService(http) {
        this.http = http;
        this.url = "http://localhost:8080/korea";
        this.ResourceItem = "/resource/find/" + this.id;
        this.ResourceItems = "/resource/list";
        this.ProjectSearchItems = "/resource/search";
        this.AddProjectItem = "/resource/create";
        this.UpdateProjectItem = "/resource/update/{id}";
    }
    ResourceService.prototype.getall = function () {
        return this._get("" + this.url + this.ResourceItems);
    };
    ResourceService.prototype._get = function (url) {
        return this.http.get(url)
            .pipe(operators_1.map(function (res) { return res; }));
    };
    ResourceService.prototype.createNew = function (resource) {
        var body = new http_1.HttpParams();
        body = body.append('grant_type', 'password');
        body = body.append('username', userName);
        body = body.append('password', password);
        return this._post("" + this.url + this.AddProjectItem, resource);
    };
    ResourceService.prototype._post = function (url, resource) {
        return this.http.post(url, resource)
            .pipe(operators_1.map(function (res) { return res; }));
    };
    ResourceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
