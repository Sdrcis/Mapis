import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link5Page } from './link5.page';

const routes: Routes = [
  {
    path: '',
    component: Link5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link5PageRoutingModule {}
