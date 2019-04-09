import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FooterPage = /** @class */ (function () {
    function FooterPage() {
    }
    FooterPage.prototype.Cprofile = function () {
        console.log("Hello this is Profiel ");
    };
    FooterPage.prototype.Cmenu = function () {
        console.log("Hello this is menu ");
    };
    FooterPage.prototype.Cindex = function () {
        console.log("Hello this is index ");
    };
    FooterPage.prototype.go = function () {
        console.log("i just Click it");
    };
    FooterPage.prototype.ngOnInit = function () {
    };
    FooterPage = tslib_1.__decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.page.html',
            styleUrls: ['./footer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterPage);
    return FooterPage;
}());
export { FooterPage };
//# sourceMappingURL=footer.page.js.map