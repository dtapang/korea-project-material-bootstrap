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
var ResourceItem_1 = require("app/models/ResourceItem");
var ProjectResourcesComponent = /** @class */ (function () {
    function ProjectResourcesComponent(resourceService, projectService, prService, route) {
        this.resourceService = resourceService;
        this.projectService = projectService;
        this.prService = prService;
        this.route = route;
        this.p1 = 1;
        this.p2 = 1;
        this.selectedProject = 'None';
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
            console.log("projects array: " + _this.projects);
        });
        this.resources = new Set();
        this.projectResources = new Set();
        this.resourceService.getall().subscribe(function (arr) {
            if (arr) {
                arr.forEach(function (res) {
                    _this.resources.add(new ResourceItem_1.ResourceItem(res, false));
                });
            }
            console.log("resources set: " + _this.resources);
        });
    };
    ProjectResourcesComponent.prototype.hasProjects = function () {
        if (this.projects) {
            return true;
        }
        return false;
    };
    ProjectResourcesComponent.prototype.submitProjectResources = function () {
        this.prService.resourceSet = this.projectResources;
        this.route.navigate(['/formula']); //private route: Router
    };
    ProjectResourcesComponent.prototype.addToProject = function () {
        var $self = this.projectResources;
        this.resources.forEach(function (resItem) {
            if (resItem.selected) {
                $self.add(resItem);
            }
        });
        this.projectResources = $self;
    };
    ProjectResourcesComponent.prototype.deleteSelected = function () {
        var $self = this.projectResources;
        this.projectResources.forEach(function (resItem) {
            if (resItem.selected) {
                $self["delete"](resItem);
            }
        });
    };
    ProjectResourcesComponent.prototype.selectAllResources = function () {
        this.resources.forEach(function (item) {
            item.selected = true;
        });
    };
    ProjectResourcesComponent.prototype.clearselectedResources = function () {
        this.resources.forEach(function (item) {
            item.selected = false;
        });
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
