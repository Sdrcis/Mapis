import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link38Page } from './link38.page';

const routes: Routes = [
  {
    path: '',
    component: Link38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link38PageRoutingModule {}
