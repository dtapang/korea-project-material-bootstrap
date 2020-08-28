"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResourcesComponent = void 0;
var core_1 = require("@angular/core");
var Resource_1 = require("app/models/Resource");
var table_1 = require("@angular/material/table");
var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent(resourceService) {
        this.p = 1;
        this.searchText = '';
        this.selectedResourceMap = new Map();
        this._resourceService = resourceService;
        this.newResource = new Resource_1.Resource("", "");
    }
    ResourcesComponent.prototype.submitForm = function (resource) {
        console.log(resource);
        console.log(this._resourceService.createNew(resource).subscribe());
    };
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._resourceService.getall().subscribe(function (arr) {
            _this.resources = arr;
            _this.dataSource = new table_1.MatTableDataSource(arr);
        });
    };
    ResourcesComponent.prototype.applyFilter = function (value) {
        var filterValue = value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ResourcesComponent.prototype.onCheck = function (id) {
        this.selectedResourceMap.set(id, this.resources[id]);
    };
    ResourcesComponent.prototype.onUncheck = function (id) {
        this.selectedResourceMap["delete"](id);
    };
    ResourcesComponent.prototype.addNewResource = function (event) {
        console.log(event);
        this.resources.push(event);
        this.dataSource = new table_1.MatTableDataSource(this.resources);
        //TODO: submit to API: Back
    };
    ResourcesComponent = __decorate([
        core_1.Component({
            selector: 'app-resources',
            templateUrl: './resources.component.html',
            styleUrls: ['./resources.component.css']
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());
exports.ResourcesComponent = ResourcesComponent;
