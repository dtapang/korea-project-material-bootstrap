"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectResourcesComponent = void 0;
var core_1 = require("@angular/core");
var ProjectResourcesComponent = /** @class */ (function () {
    function ProjectResourcesComponent(resourceService, projectService) {
        this.resourceService = resourceService;
        this.projectService = projectService;
        this.projectResourcesMap = new Map();
        this.selectedResourceMap = new Map();
        this.prCheckSet = new Set();
    }
    ProjectResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getall().subscribe(function (arr) {
            if (arr) {
                _this.projects = arr;
            }
            else {
                _this.projects = [];
            }
            console.log("projects " + _this.projects);
        });
        this.resourceService.getall().subscribe(function (arr) {
            if (arr) {
                _this.resources = arr;
            }
            else {
                _this.resources = [];
            }
            console.log("resources " + _this.resources);
        });
    };
    ProjectResourcesComponent.prototype.loadProject = function (id) {
        console.log(id);
    };
    ProjectResourcesComponent.prototype.onCheck = function (id) {
        //Add selected resource to srMap where res.id == id
        var obj = this.resources.find(function (obj) { return obj.id == id; });
        this.selectedResourceMap.set(id, obj);
    };
    ProjectResourcesComponent.prototype.onPRCheck = function (id) {
        //Add selected resource to srMap where res.id == id
        this.prCheckSet.add(id);
    };
    ProjectResourcesComponent.prototype.findObjectByKey = function (array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    };
    ProjectResourcesComponent.prototype.onUncheck = function (id) {
        this.selectedResourceMap["delete"](id);
    };
    ProjectResourcesComponent.prototype.onPRUncheck = function (id) {
        this.prCheckSet["delete"](id);
    };
    ProjectResourcesComponent.prototype.onNativeChange = function (e, id) {
        if (e.target.checked) { //checked
            this.onCheck(id);
        }
        else {
            //unchecked
            this.onUncheck(id);
        }
    };
    ProjectResourcesComponent.prototype.onPRItemChange = function (e, id) {
        if (e.target.checked) { //checked
            this.onPRCheck(id);
        }
        else {
            //unchecked
            this.onPRUncheck(id);
        }
    };
    ProjectResourcesComponent.prototype.addSelectedResourcesToProject = function () {
        var _this = this;
        this.selectedResourceMap.forEach(function (value, key) {
            _this.projectResourcesMap.set(key, value);
        });
    };
    ProjectResourcesComponent.prototype.prValues = function () {
        var sPRValues = this.projectResourcesMap.values();
        var array = [];
        this.projectResourcesMap.forEach(function (value, key) {
            array.push(value);
        });
        return array;
        //return sPRValues;
    };
    ProjectResourcesComponent = __decorate([
        core_1.Component({
            selector: 'app-project-resources',
            templateUrl: './project-resources.component.html',
            styleUrls: ['./project-resources.component.css']
        })
    ], ProjectResourcesComponent);
    return ProjectResourcesComponent;
}());
exports.ProjectResourcesComponent = ProjectResourcesComponent;
