import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemDispositStatementPage } from './mem-disposit-statement.page';

const routes: Routes = [
  {
    path: '',
    component: MemDispositStatementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemDispositStatementPage]
})
export class MemDispositStatementPageModule {}
