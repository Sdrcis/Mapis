import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acciones2Page } from './acciones2.page';

const routes: Routes = [
  {
    path: '',
    component: Acciones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acciones2PageRoutingModule {}
