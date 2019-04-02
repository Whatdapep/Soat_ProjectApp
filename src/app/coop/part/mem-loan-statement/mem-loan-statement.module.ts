import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemLoanStatementPage } from './mem-loan-statement.page';

const routes: Routes = [
  {
    path: '',
    component: MemLoanStatementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemLoanStatementPage]
})
export class MemLoanStatementPageModule {}
