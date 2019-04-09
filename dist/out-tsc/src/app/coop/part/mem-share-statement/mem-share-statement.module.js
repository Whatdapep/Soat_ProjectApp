import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemShareStatementPage } from './mem-share-statement.page';
var routes = [
    {
        path: '',
        component: MemShareStatementPage
    }
];
var MemShareStatementPageModule = /** @class */ (function () {
    function MemShareStatementPageModule() {
    }
    MemShareStatementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemShareStatementPage]
        })
    ], MemShareStatementPageModule);
    return MemShareStatementPageModule;
}());
export { MemShareStatementPageModule };
//# sourceMappingURL=mem-share-statement.module.js.map