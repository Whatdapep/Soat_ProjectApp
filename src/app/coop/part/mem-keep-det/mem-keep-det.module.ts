import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemKeepDetPage } from './mem-keep-det.page';

const routes: Routes = [
  {
    path: '',
    component: MemKeepDetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemKeepDetPage]
})
export class MemKeepDetPageModule {}
