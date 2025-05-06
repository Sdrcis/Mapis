import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasossexdigPage } from './casossexdig.page';

const routes: Routes = [
  {
    path: '',
    component: CasossexdigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasossexdigPageRoutingModule {}
