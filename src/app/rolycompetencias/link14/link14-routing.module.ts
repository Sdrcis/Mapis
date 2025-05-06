import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link14Page } from './link14.page';

const routes: Routes = [
  {
    path: '',
    component: Link14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link14PageRoutingModule {}
