import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoardListPage } from './board-list.page';
var routes = [
    {
        path: '',
        component: BoardListPage
    }
];
var BoardListPageModule = /** @class */ (function () {
    function BoardListPageModule() {
    }
    BoardListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BoardListPage]
        })
    ], BoardListPageModule);
    return BoardListPageModule;
}());
export { BoardListPageModule };
//# sourceMappingURL=board-list.module.js.map