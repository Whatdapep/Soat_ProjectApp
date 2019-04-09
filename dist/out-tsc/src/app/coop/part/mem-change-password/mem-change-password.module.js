import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemChangePasswordPage } from './mem-change-password.page';
var routes = [
    {
        path: '',
        component: MemChangePasswordPage
    }
];
var MemChangePasswordPageModule = /** @class */ (function () {
    function MemChangePasswordPageModule() {
    }
    MemChangePasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemChangePasswordPage]
        })
    ], MemChangePasswordPageModule);
    return MemChangePasswordPageModule;
}());
export { MemChangePasswordPageModule };
//# sourceMappingURL=mem-change-password.module.js.map