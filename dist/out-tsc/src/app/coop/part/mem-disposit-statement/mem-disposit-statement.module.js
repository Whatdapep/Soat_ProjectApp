import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemDispositStatementPage } from './mem-disposit-statement.page';
var routes = [
    {
        path: '',
        component: MemDispositStatementPage
    }
];
var MemDispositStatementPageModule = /** @class */ (function () {
    function MemDispositStatementPageModule() {
    }
    MemDispositStatementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemDispositStatementPage]
        })
    ], MemDispositStatementPageModule);
    return MemDispositStatementPageModule;
}());
export { MemDispositStatementPageModule };
//# sourceMappingURL=mem-disposit-statement.module.js.map