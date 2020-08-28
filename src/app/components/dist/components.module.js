"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var footer_component_1 = require("./footer/footer.component");
var navbar_component_1 = require("./navbar/navbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var ngx_pagination_1 = require("ngx-pagination");
var resource_list_component_1 = require("./resource-list/resource-list.component");
var resources_component_1 = require("app/resources/resources.component");
var project_resources_component_1 = require("./project-resources/project-resources.component");
var search_filter_pipe_1 = require("app/pipes/search-filter.pipe");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            declarations: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                resource_list_component_1.ResourceListComponent,
                resources_component_1.ResourcesComponent,
                project_resources_component_1.ProjectResourcesComponent,
                search_filter_pipe_1.SearchFilterPipe
            ],
            exports: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                resource_list_component_1.ResourceListComponent,
                resources_component_1.ResourcesComponent,
                search_filter_pipe_1.SearchFilterPipe
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
