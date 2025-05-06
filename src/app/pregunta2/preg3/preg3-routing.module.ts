import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preg3Page } from './preg3.page';

const routes: Routes = [
  {
    path: '',
    component: Preg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preg3PageRoutingModule {}
