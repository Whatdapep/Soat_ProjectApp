import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemLoanPage } from './mem-loan.page';
var routes = [
    {
        path: '',
        component: MemLoanPage
    }
];
var MemLoanPageModule = /** @class */ (function () {
    function MemLoanPageModule() {
    }
    MemLoanPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemLoanPage]
        })
    ], MemLoanPageModule);
    return MemLoanPageModule;
}());
export { MemLoanPageModule };
//# sourceMappingURL=mem-loan.module.js.map