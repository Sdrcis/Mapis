import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acciones4444Page } from './acciones4444.page';

const routes: Routes = [
  {
    path: '',
    component: Acciones4444Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acciones4444PageRoutingModule {}
