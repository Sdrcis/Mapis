import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas10cPage } from './pautas10c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas10cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas10cPageRoutingModule {}
