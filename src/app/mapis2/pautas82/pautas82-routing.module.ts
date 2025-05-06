import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas82Page } from './pautas82.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas82Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas82PageRoutingModule {}
