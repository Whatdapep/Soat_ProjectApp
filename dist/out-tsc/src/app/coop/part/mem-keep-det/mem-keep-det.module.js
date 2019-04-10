import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MemKeepDetPage } from './mem-keep-det.page';
var routes = [
    {
        path: '',
        component: MemKeepDetPage
    }
];
var MemKeepDetPageModule = /** @class */ (function () {
    function MemKeepDetPageModule() {
    }
    MemKeepDetPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MemKeepDetPage]
        })
    ], MemKeepDetPageModule);
    return MemKeepDetPageModule;
}());
export { MemKeepDetPageModule };
//# sourceMappingURL=mem-keep-det.module.js.map