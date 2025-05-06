import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasossexPage } from './casossex.page';

const routes: Routes = [
  {
    path: '',
    component: CasossexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasossexPageRoutingModule {}
