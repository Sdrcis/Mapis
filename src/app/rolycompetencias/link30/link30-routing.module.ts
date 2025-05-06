import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link30Page } from './link30.page';

const routes: Routes = [
  {
    path: '',
    component: Link30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link30PageRoutingModule {}
