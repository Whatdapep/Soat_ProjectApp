import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoardDetailPage } from './board-detail.page';
var routes = [
    {
        path: '',
        component: BoardDetailPage
    }
];
var BoardDetailPageModule = /** @class */ (function () {
    function BoardDetailPageModule() {
    }
    BoardDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BoardDetailPage]
        })
    ], BoardDetailPageModule);
    return BoardDetailPageModule;
}());
export { BoardDetailPageModule };
//# sourceMappingURL=board-detail.module.js.map