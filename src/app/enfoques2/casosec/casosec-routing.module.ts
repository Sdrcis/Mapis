import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosecPage } from './casosec.page';

const routes: Routes = [
  {
    path: '',
    component: CasosecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosecPageRoutingModule {}
