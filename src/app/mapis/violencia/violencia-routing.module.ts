import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaPage } from './violencia.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaPageRoutingModule {}
