import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosfisi4Page } from './casosfisi4.page';

const routes: Routes = [
  {
    path: '',
    component: Casosfisi4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosfisi4PageRoutingModule {}
