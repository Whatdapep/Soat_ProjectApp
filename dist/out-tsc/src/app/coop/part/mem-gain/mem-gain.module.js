import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemGainPage } from './mem-gain.page';
var routes = [
    {
        path: '',
        component: MemGainPage
    }
];
var MemGainPageModule = /** @class */ (function () {
    function MemGainPageModule() {
    }
    MemGainPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemGainPage]
        })
    ], MemGainPageModule);
    return MemGainPageModule;
}());
export { MemGainPageModule };
//# sourceMappingURL=mem-gain.module.js.map