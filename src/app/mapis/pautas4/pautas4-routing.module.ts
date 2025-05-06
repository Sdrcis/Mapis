import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas4Page } from './pautas4.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas4PageRoutingModule {}
