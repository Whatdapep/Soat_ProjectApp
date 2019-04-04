import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authcode', pathMatch: 'full'},
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'footer', loadChildren: './content/footer/footer.module#FooterPageModule' },
  // { path: 'mem-status', loadChildren: './coop/part/mem-status/mem-status.module#MemStatusPageModule' },
  { path: 'mem-loan', loadChildren: './coop/part/mem-loan/mem-loan.module#MemLoanPageModule' },
  // { path: 'home', loadChildren: './content/home/home.module#HomePageModule' },
  { path: 'logon', loadChildren: './logon/logon.module#LogonPageModule' },
  // { path: 'menu', loadChildren: './coop/menu/menu.module#MenuPageModule' },
  { path: 'mem-loan-statement', loadChildren: './coop/part/mem-loan-statement/mem-loan-statement.module#MemLoanStatementPageModule' },
  { path: 'mem-disposit', loadChildren: './coop/part/mem-disposit/mem-disposit.module#MemDispositPageModule' },
  { path: 'mem-disposit-statement', loadChildren: './coop/part/mem-disposit-statement/mem-disposit-statement.module#MemDispositStatementPageModule' },
  { path: 'mem-dividend', loadChildren: './coop/part/mem-dividend/mem-dividend.module#MemDividendPageModule' },
  { path: 'mem-coll', loadChildren: './coop/part/mem-coll/mem-coll.module#MemCollPageModule' },
  { path: 'mem-gain', loadChildren: './coop/part/mem-gain/mem-gain.module#MemGainPageModule' },
  { path: 'mem-change-password', loadChildren: './coop/part/mem-change-password/mem-change-password.module#MemChangePasswordPageModule' },
  { path: 'mem-keep-det', loadChildren: './coop/part/mem-keep-det/mem-keep-det.module#MemKeepDetPageModule' },
  { path: 'mem-share-statement', loadChildren: './coop/part/mem-share-statement/mem-share-statement.module#MemShareStatementPageModule' },
  { path: 'mem-keep-det-statement', loadChildren: './coop/part/mem-keep-det-statement/mem-keep-det-statement.module#MemKeepDetStatementPageModule' },
  { path: 'board-list', loadChildren: './content/board-list/board-list.module#BoardListPageModule' },
  { path: 'board-detail', loadChildren: './content/board-detail/board-detail.module#BoardDetailPageModule' },
  { path: 'list', loadChildren: './content/list/list.module#ListPageModule' },
  { path: 'show', loadChildren: './content/show/show.module#ShowPageModule' },
  { path: 'board-post', loadChildren: './coop/board-post/board-post.module#BoardPostPageModule' },
  { path: 'authcode', loadChildren: './coop/system/authcode/authcode.module#AuthcodePageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
