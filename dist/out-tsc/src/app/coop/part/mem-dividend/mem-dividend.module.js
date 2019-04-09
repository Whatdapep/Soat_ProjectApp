import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemDividendPage } from './mem-dividend.page';
var routes = [
    {
        path: '',
        component: MemDividendPage
    }
];
var MemDividendPageModule = /** @class */ (function () {
    function MemDividendPageModule() {
    }
    MemDividendPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemDividendPage]
        })
    ], MemDividendPageModule);
    return MemDividendPageModule;
}());
export { MemDividendPageModule };
//# sourceMappingURL=mem-dividend.module.js.map