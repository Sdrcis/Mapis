import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterseccionalidadPage } from './interseccionalidad.page';

const routes: Routes = [
  {
    path: '',
    component: InterseccionalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterseccionalidadPageRoutingModule {}
