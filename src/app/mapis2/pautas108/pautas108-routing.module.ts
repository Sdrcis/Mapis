import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas108Page } from './pautas108.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas108Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas108PageRoutingModule {}
