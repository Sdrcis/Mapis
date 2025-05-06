import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link45Page } from './link45.page';

const routes: Routes = [
  {
    path: '',
    component: Link45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link45PageRoutingModule {}
