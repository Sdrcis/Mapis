import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterculturalidadPage } from './interculturalidad.page';

const routes: Routes = [
  {
    path: '',
    component: InterculturalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterculturalidadPageRoutingModule {}
