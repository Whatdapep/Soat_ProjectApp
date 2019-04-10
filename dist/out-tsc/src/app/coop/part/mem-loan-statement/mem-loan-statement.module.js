import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemLoanStatementPage } from './mem-loan-statement.page';
var routes = [
    {
        path: '',
        component: MemLoanStatementPage
    }
];
var MemLoanStatementPageModule = /** @class */ (function () {
    function MemLoanStatementPageModule() {
    }
    MemLoanStatementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemLoanStatementPage]
        })
    ], MemLoanStatementPageModule);
    return MemLoanStatementPageModule;
}());
export { MemLoanStatementPageModule };
//# sourceMappingURL=mem-loan-statement.module.js.map