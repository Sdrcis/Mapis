import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap4Page } from './normativaap4.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap4PageRoutingModule {}
