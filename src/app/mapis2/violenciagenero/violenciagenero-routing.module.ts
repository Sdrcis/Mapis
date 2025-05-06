import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciageneroPage } from './violenciagenero.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciageneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciageneroPageRoutingModule {}
