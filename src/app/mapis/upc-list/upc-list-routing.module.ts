import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcListPage } from './upc-list.page';

const routes: Routes = [
  {
    path: '',
    component: UpcListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcListPageRoutingModule {}
