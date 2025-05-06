import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas22Page } from './pautas22.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas22PageRoutingModule {}
