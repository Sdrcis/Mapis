import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link22Page } from './link22.page';

const routes: Routes = [
  {
    path: '',
    component: Link22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link22PageRoutingModule {}
