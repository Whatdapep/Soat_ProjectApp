import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemCollPage } from './mem-coll.page';
var routes = [
    {
        path: '',
        component: MemCollPage
    }
];
var MemCollPageModule = /** @class */ (function () {
    function MemCollPageModule() {
    }
    MemCollPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemCollPage]
        })
    ], MemCollPageModule);
    return MemCollPageModule;
}());
export { MemCollPageModule };
//# sourceMappingURL=mem-coll.module.js.map