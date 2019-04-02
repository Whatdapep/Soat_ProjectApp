import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemKeepDetStatementPage } from './mem-keep-det-statement.page';

const routes: Routes = [
  {
    path: '',
    component: MemKeepDetStatementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemKeepDetStatementPage]
})
export class MemKeepDetStatementPageModule {}
