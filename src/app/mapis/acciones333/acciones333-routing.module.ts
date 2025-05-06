import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acciones333Page } from './acciones333.page';

const routes: Routes = [
  {
    path: '',
    component: Acciones333Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acciones333PageRoutingModule {}
