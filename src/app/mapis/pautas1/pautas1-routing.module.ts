import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas1Page } from './pautas1.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas1PageRoutingModule {}
