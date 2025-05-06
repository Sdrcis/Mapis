import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas13b33Page } from './pautas13b33.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas13b33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas13b33PageRoutingModule {}
