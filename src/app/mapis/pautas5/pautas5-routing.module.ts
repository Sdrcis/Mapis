import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas5Page } from './pautas5.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas5PageRoutingModule {}
