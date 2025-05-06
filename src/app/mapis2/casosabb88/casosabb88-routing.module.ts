import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosabb88Page } from './casosabb88.page';

const routes: Routes = [
  {
    path: '',
    component: Casosabb88Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosabb88PageRoutingModule {}
