"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = exports.ROUTES = void 0;
var core_1 = require("@angular/core");
exports.ROUTES = [
    { path: "/login", title: 'Login', icon: 'person', "class": '' },
    { path: "/signup", title: 'Signup', icon: 'person', "class": '' },
    { path: '/project', title: 'Project', icon: 'library_books', "class": '' },
    { path: '/resources', title: 'Resource', icon: 'content_paste', "class": '' },
    { path: '/formula', title: 'Formula', icon: 'bubble_chart', "class": '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', "class": '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', "class": '' },
    { path: '/table-list', title: 'Table List', icon: 'content_paste', "class": '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
