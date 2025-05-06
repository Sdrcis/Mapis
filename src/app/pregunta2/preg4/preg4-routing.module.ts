import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preg4Page } from './preg4.page';

const routes: Routes = [
  {
    path: '',
    component: Preg4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preg4PageRoutingModule {}
