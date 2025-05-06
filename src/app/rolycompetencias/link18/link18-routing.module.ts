import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link18Page } from './link18.page';

const routes: Routes = [
  {
    path: '',
    component: Link18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link18PageRoutingModule {}
