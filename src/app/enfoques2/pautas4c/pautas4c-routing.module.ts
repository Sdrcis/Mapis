import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas4cPage } from './pautas4c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas4cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas4cPageRoutingModule {}
