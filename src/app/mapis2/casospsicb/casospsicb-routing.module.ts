import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasospsicbPage } from './casospsicb.page';

const routes: Routes = [
  {
    path: '',
    component: CasospsicbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasospsicbPageRoutingModule {}
