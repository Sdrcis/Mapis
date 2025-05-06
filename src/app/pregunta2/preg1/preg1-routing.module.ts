import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preg1Page } from './preg1.page';

const routes: Routes = [
  {
    path: '',
    component: Preg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preg1PageRoutingModule {}
