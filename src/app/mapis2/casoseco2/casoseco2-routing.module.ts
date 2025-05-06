import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casoseco2Page } from './casoseco2.page';

const routes: Routes = [
  {
    path: '',
    component: Casoseco2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casoseco2PageRoutingModule {}
