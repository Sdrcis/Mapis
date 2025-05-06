import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosf1Page } from './casosf1.page';

const routes: Routes = [
  {
    path: '',
    component: Casosf1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosf1PageRoutingModule {}
