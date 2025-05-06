import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas42Page } from './pautas42.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas42PageRoutingModule {}
