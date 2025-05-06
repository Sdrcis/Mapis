import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link41Page } from './link41.page';

const routes: Routes = [
  {
    path: '',
    component: Link41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link41PageRoutingModule {}
