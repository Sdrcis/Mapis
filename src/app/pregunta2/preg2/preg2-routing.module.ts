import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preg2Page } from './preg2.page';

const routes: Routes = [
  {
    path: '',
    component: Preg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preg2PageRoutingModule {}
