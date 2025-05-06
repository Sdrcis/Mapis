import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link29Page } from './link29.page';

const routes: Routes = [
  {
    path: '',
    component: Link29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link29PageRoutingModule {}
