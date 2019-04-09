import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterPage } from './footer.page';
// const routes: Routes = [
//   {
//     path: '',
//     component: FooterPage
//   }
// ];
var routes = [
    {
        path: 'footer',
        component: FooterPage,
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                // path:'menu',
                // loadChildren: '../part/menu/menu.module#MenuPageModule'
                path: 'menu',
                loadChildren: '../../coop/menu/menu.module#MenuPageModule'
            },
            {
                path: 'profile',
                loadChildren: '../../coop/part/mem-status/mem-status.module#MemStatusPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'footer/home',
        pathMatch: 'full'
    }
];
var FooterPageModule = /** @class */ (function () {
    function FooterPageModule() {
    }
    FooterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FooterPage]
        })
    ], FooterPageModule);
    return FooterPageModule;
}());
export { FooterPageModule };
//# sourceMappingURL=footer.module.js.map