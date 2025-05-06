import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciasexualPage } from './violenciasexual.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciasexualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciasexualPageRoutingModule {}
