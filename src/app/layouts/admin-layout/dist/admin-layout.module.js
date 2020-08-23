"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminLayoutModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var admin_layout_routing_1 = require("./admin-layout.routing");
var dashboard_component_1 = require("../../dashboard/dashboard.component");
var user_profile_component_1 = require("../../user-profile/user-profile.component");
var table_list_component_1 = require("../../table-list/table-list.component");
var typography_component_1 = require("../../typography/typography.component");
var icons_component_1 = require("../../icons/icons.component");
var maps_component_1 = require("../../maps/maps.component");
var notifications_component_1 = require("../../notifications/notifications.component");
var upgrade_component_1 = require("../../upgrade/upgrade.component");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var form_field_1 = require("@angular/material/form-field");
var tooltip_1 = require("@angular/material/tooltip");
var select_1 = require("@angular/material/select");
var app_component_1 = require("app/app.component");
var login_component_1 = require("app/components/user/login/login.component");
var signup_component_1 = require("app/components/user/signup/signup.component");
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                button_1.MatButtonModule,
                core_2.MatRippleModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                tooltip_1.MatTooltipModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes)
            ],
            providers: [app_component_1.OnlyLoggedInUserGuard],
            declarations: [
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                dashboard_component_1.DashboardComponent,
                user_profile_component_1.UserProfileComponent,
                table_list_component_1.TableListComponent,
                typography_component_1.TypographyComponent,
                icons_component_1.IconsComponent,
                maps_component_1.MapsComponent,
                notifications_component_1.NotificationsComponent,
                upgrade_component_1.UpgradeComponent,
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;
