import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogonPage } from './logon.page';
var routes = [
    {
        path: '',
        component: LogonPage
    }
];
var LogonPageModule = /** @class */ (function () {
    function LogonPageModule() {
    }
    LogonPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LogonPage]
        })
    ], LogonPageModule);
    return LogonPageModule;
}());
export { LogonPageModule };
//# sourceMappingURL=logon.module.js.map