import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link42Page } from './link42.page';

const routes: Routes = [
  {
    path: '',
    component: Link42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link42PageRoutingModule {}
