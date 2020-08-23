"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthenticationService = void 0;
var core_1 = require("@angular/core");
var lib_1 = require("jwt-decode/lib");
var http_1 = require("@angular/common/http");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(handler, http) {
        this.handler = handler;
        this.http = http;
        this.url = "http://localhost:8080/korea";
        this.loginPath = "/auth/login";
        this.signupPath = "/auth/signup";
        this.logoutPath = "/logout";
        this.options = {
            observe: "response"
        };
        this.http = new http_1.HttpClient(this.handler);
    }
    AuthenticationService.prototype.loginUser = function (user) {
        /**
         * psasing the credentials  from form towards the servers
         */
        return this.http.post("" + this.url + this.loginPath, user, {
            observe: 'response'
        });
    };
    // register a user
    AuthenticationService.prototype.signupUser = function (user) {
        return this.http.post("" + this.url + this.signupPath, user, this.options);
    };
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    // check if the user is log in or not
    AuthenticationService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        if (!!this.loggedIn()) {
            return false;
        }
        else {
            // return a boolean reflecting 
            // whether or not the token is expired
            return lib_1.decode.tokenNotExpired(null, token);
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
