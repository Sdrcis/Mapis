import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciasexdigPage } from './violenciasexdig.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciasexdigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciasexdigPageRoutingModule {}
