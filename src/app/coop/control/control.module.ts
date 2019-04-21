import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import { AuthcodePage } from '../system/authcode/authcode.page';
import { ControlPage } from './control.page';
import { ComAuthcodeComponent } from '../system/com-authcode/com-authcode.component';
const routes: Routes = [
  {
    path: '',
    component: ControlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // AuthcodePage,
    // ComAuthcodeComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [ControlPage,
    // ComAuthcodeComponent
  ],
  entryComponents: [
    
    // ComAuthcodeComponent
  ]
})
export class ControlPageModule {}
