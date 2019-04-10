import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemDispositPage } from './mem-disposit.page';
var routes = [
    {
        path: '',
        component: MemDispositPage
    }
];
var MemDispositPageModule = /** @class */ (function () {
    function MemDispositPageModule() {
    }
    MemDispositPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemDispositPage]
        })
    ], MemDispositPageModule);
    return MemDispositPageModule;
}());
export { MemDispositPageModule };
//# sourceMappingURL=mem-disposit.module.js.map