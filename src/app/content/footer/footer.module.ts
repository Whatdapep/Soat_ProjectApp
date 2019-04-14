import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FooterPage } from './footer.page';


// const routes: Routes = [
//   {
//     path: '',
//     component: FooterPage
//   }
// ];
const routes: Routes = [
  {
    path: 'footer',
    component: FooterPage,
    children:[
  {
    path:'home',
    loadChildren:  '../home/home.module#HomePageModule'

  },
  
  {
    // path:'menu',
    // loadChildren: '../part/menu/menu.module#MenuPageModule'

    path:'menu',
    loadChildren: '../../coop/menu/menu.module#MenuPageModule'
  },
  // { path: 'authcode/:id', loadChildren: './coop/system/authcode/authcode.module#AuthcodePageModule' },
  {
    path:'profile',
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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterPage]
})
export class FooterPageModule {}
