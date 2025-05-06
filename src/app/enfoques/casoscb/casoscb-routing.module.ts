import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoscbPage } from './casoscb.page';

const routes: Routes = [
  {
    path: '',
    component: CasoscbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoscbPageRoutingModule {}
