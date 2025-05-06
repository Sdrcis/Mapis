import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link13Page } from './link13.page';

const routes: Routes = [
  {
    path: '',
    component: Link13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link13PageRoutingModule {}
