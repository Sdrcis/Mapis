import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casospsi2Page } from './casospsi2.page';

const routes: Routes = [
  {
    path: '',
    component: Casospsi2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casospsi2PageRoutingModule {}
