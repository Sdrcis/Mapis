import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link15Page } from './link15.page';

const routes: Routes = [
  {
    path: '',
    component: Link15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link15PageRoutingModule {}
