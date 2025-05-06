import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas62Page } from './pautas62.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas62PageRoutingModule {}
