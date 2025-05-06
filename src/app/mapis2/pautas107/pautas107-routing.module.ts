import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas107Page } from './pautas107.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas107Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas107PageRoutingModule {}
