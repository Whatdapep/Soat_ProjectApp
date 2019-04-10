import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoardPostPage } from './board-post.page';
var routes = [
    {
        path: '',
        component: BoardPostPage
    }
];
var BoardPostPageModule = /** @class */ (function () {
    function BoardPostPageModule() {
    }
    BoardPostPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BoardPostPage]
        })
    ], BoardPostPageModule);
    return BoardPostPageModule;
}());
export { BoardPostPageModule };
//# sourceMappingURL=board-post.module.js.map