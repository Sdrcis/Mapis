import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link8Page } from './link8.page';

const routes: Routes = [
  {
    path: '',
    component: Link8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link8PageRoutingModule {}
