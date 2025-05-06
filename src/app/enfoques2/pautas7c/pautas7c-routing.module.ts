import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas7cPage } from './pautas7c.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas7cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas7cPageRoutingModule {}
