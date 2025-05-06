import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas9Page } from './pautas9.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas9PageRoutingModule {}
