import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link20Page } from './link20.page';

const routes: Routes = [
  {
    path: '',
    component: Link20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link20PageRoutingModule {}
