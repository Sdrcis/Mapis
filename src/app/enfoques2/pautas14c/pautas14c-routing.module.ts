import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas14cPage } from './pautas14c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas14cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas14cPageRoutingModule {}
