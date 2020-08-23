"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var project_service_1 = require("./project.service");
describe('ProjectServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(project_service_1.ProjectServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
