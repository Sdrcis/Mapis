import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link59Page } from './link59.page';

const routes: Routes = [
  {
    path: '',
    component: Link59Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link59PageRoutingModule {}
