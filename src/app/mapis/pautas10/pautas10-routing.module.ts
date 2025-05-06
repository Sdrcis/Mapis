import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas10Page } from './pautas10.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas10PageRoutingModule {}
