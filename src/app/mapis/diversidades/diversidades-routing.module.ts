import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiversidadesPage } from './diversidades.page';

const routes: Routes = [
  {
    path: '',
    component: DiversidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiversidadesPageRoutingModule {}
