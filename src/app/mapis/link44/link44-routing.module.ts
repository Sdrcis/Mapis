import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link44Page } from './link44.page';

const routes: Routes = [
  {
    path: '',
    component: Link44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link44PageRoutingModule {}
