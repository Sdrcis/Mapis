import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link43Page } from './link43.page';

const routes: Routes = [
  {
    path: '',
    component: Link43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link43PageRoutingModule {}
