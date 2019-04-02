import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemShareStatementPage } from './mem-share-statement.page';

const routes: Routes = [
  {
    path: '',
    component: MemShareStatementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemShareStatementPage]
})
export class MemShareStatementPageModule {}
