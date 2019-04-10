import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthcodePage } from './authcode.page';
var routes = [
    {
        path: '',
        component: AuthcodePage
    }
];
var AuthcodePageModule = /** @class */ (function () {
    function AuthcodePageModule() {
    }
    AuthcodePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthcodePage]
        })
    ], AuthcodePageModule);
    return AuthcodePageModule;
}());
export { AuthcodePageModule };
//# sourceMappingURL=authcode.module.js.map