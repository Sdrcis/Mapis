import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas104Page } from './pautas104.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas104Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas104PageRoutingModule {}
