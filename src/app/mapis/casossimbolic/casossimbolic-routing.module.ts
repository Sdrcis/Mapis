import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasossimbolicPage } from './casossimbolic.page';

const routes: Routes = [
  {
    path: '',
    component: CasossimbolicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasossimbolicPageRoutingModule {}
