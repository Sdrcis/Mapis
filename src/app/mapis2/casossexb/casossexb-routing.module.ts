import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasossexbPage } from './casossexb.page';

const routes: Routes = [
  {
    path: '',
    component: CasossexbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasossexbPageRoutingModule {}
