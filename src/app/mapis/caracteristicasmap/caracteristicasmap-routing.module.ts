import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracteristicasmapPage } from './caracteristicasmap.page';

const routes: Routes = [
  {
    path: '',
    component: CaracteristicasmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracteristicasmapPageRoutingModule {}
