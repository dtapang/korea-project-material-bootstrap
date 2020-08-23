"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var signup_1 = require("app/models/signup");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.user = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: ""
        };
        this.signup = new signup_1.Signup();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onClickSubmit = function (user) {
        var _this = this;
        console.log(user);
        this.auth.signupUser(user).subscribe(function (res) {
            _this.auth.setToken(res.body.jwt);
            _this.route.navigate(['/project']);
        }, function (err) {
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
