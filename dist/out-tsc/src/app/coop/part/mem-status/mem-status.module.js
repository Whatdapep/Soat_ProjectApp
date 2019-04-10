import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemStatusPage } from './mem-status.page';
var routes = [
    {
        path: '',
        component: MemStatusPage
    }
];
var MemStatusPageModule = /** @class */ (function () {
    function MemStatusPageModule() {
    }
    MemStatusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemStatusPage]
        })
    ], MemStatusPageModule);
    return MemStatusPageModule;
}());
export { MemStatusPageModule };
//# sourceMappingURL=mem-status.module.js.map