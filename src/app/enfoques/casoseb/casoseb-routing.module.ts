import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosebPage } from './casoseb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosebPageRoutingModule {}
