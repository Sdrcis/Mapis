import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas2Page } from './pautas2.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas2PageRoutingModule {}
