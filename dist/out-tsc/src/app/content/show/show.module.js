import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShowPage } from './show.page';
var routes = [
    {
        path: '',
        component: ShowPage
    }
];
var ShowPageModule = /** @class */ (function () {
    function ShowPageModule() {
    }
    ShowPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ShowPage]
        })
    ], ShowPageModule);
    return ShowPageModule;
}());
export { ShowPageModule };
//# sourceMappingURL=show.module.js.map