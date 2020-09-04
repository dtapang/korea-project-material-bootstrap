"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormulaComponent = void 0;
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var table_1 = require("@angular/material/table");
var FormulaComponent = /** @class */ (function () {
    function FormulaComponent(projectService, prService) {
        this.projectService = projectService;
        this.prService = prService;
        this.project = [];
        this.projectChecked = new core_1.EventEmitter();
        this.projectChange = new core_1.EventEmitter();
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.displayedColumns = ['select', 'name', 'code', 'editable', 'itemid'];
        this.selection = new collections_1.SelectionModel(this.allowMultiSelect, this.initialSelection);
    }
    FormulaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new table_1.MatTableDataSource(this.project);
        this.projectService.getall().subscribe(function (arr) { return _this.project = arr; });
        console.log(this.prService.resourceSet);
        this.$fromProjects = this.prService.getMessage().subscribe(function (res) {
            console.log(res);
        });
    };
    FormulaComponent.prototype.ngOnDestroy = function () {
        this.$fromProjects.unsubscribe();
        // throw new Error("Method not implemented.");
    };
    /**
     * Is called when an item from the list is checked.
    @param selected
     */
    FormulaComponent.prototype.onItemCheck = function (selected) {
        this.projectChecked.emit(selected);
    };
    /**
     * Is called when task list is changed.
    @param changedTasks
     */
    FormulaComponent.prototype.onResourcesChanged = function (changedResourcess) {
        this.projectChange.emit(changedResourcess);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    FormulaComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.project.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    FormulaComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        core_1.Input()
    ], FormulaComponent.prototype, "project");
    __decorate([
        core_1.Output()
    ], FormulaComponent.prototype, "projectChecked");
    __decorate([
        core_1.Output()
    ], FormulaComponent.prototype, "projectChange");
    FormulaComponent = __decorate([
        core_1.Component({
            selector: 'app-formula',
            templateUrl: './formula.component.html',
            styleUrls: ['./formula.component.css']
        })
    ], FormulaComponent);
    return FormulaComponent;
}());
exports.FormulaComponent = FormulaComponent;
