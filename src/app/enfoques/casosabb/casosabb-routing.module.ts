import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosabbPage } from './casosabb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosabbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosabbPageRoutingModule {}
