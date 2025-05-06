import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link55Page } from './link55.page';

const routes: Routes = [
  {
    path: '',
    component: Link55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link55PageRoutingModule {}
