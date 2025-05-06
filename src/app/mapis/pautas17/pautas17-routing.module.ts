import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas17Page } from './pautas17.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas17PageRoutingModule {}
