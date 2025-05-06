import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas1b33Page } from './pautas1b33.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas1b33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas1b33PageRoutingModule {}
