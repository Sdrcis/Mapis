import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas1cPage } from './pautas1c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas1cPageRoutingModule {}
