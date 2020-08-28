"use strict";
exports.__esModule = true;
exports.AdminLayoutRoutes = void 0;
var user_profile_component_1 = require("../../user-profile/user-profile.component");
var table_list_component_1 = require("../../table-list/table-list.component");
var resources_component_1 = require("app/resources/resources.component");
var project_resources_component_1 = require("app/components/project-resources/project-resources.component");
var signup_component_1 = require("../../components/user/signup/signup.component");
var login_component_1 = require("app/components/user/login/login.component");
var app_component_1 = require("app/app.component");
exports.AdminLayoutRoutes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "signup", component: signup_component_1.SignupComponent },
    { path: 'project', component: project_resources_component_1.ProjectResourcesComponent, canActivate: [app_component_1.OnlyLoggedInUserGuard] },
    { path: 'resources', component: resources_component_1.ResourcesComponent, canActivate: [app_component_1.OnlyLoggedInUserGuard] },
    { path: 'formula', component: table_list_component_1.TableListComponent, canActivate: [app_component_1.OnlyLoggedInUserGuard] },
    { path: 'user-profile', component: user_profile_component_1.UserProfileComponent, canActivate: [app_component_1.OnlyLoggedInUserGuard] },
    { path: 'table-list', component: table_list_component_1.TableListComponent, canActivate: [app_component_1.OnlyLoggedInUserGuard] }
];
