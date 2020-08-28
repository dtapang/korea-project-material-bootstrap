"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ngx_pagination_1 = require("ngx-pagination");
var app_routing_1 = require("./app.routing");
var components_module_1 = require("./components/components.module");
var app_component_1 = require("./app.component");
var admin_layout_component_1 = require("./layouts/admin-layout/admin-layout.component");
var http_2 = require("@angular/common/http");
var interceptor_service_1 = require("./auth/interceptor.service");
var app_component_2 = require("./app.component");
var project_service_1 = require("./components/project-resources/project.service");
var resource_service_1 = require("./resources/resource.service");
var project_resources_service_1 = require("./components/project-resources/project-resources.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent
            ],
            providers: [
                http_2.HttpClientModule,
                app_component_2.OnlyLoggedInUserGuard,
                app_component_1.UserService,
                resource_service_1.ResourceService,
                project_service_1.ProjectService,
                project_resources_service_1.ProjectResourcesService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: interceptor_service_1.InterceptorService,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
