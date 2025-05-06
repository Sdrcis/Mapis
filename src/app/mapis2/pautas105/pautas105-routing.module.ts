import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas105Page } from './pautas105.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas105Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas105PageRoutingModule {}
