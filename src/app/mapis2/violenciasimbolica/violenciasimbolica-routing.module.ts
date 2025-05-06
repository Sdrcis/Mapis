import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciasimbolicaPage } from './violenciasimbolica.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciasimbolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciasimbolicaPageRoutingModule {}
