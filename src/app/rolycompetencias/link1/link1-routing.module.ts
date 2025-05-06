import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link1Page } from './link1.page';

const routes: Routes = [
  {
    path: '',
    component: Link1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link1PageRoutingModule {}
