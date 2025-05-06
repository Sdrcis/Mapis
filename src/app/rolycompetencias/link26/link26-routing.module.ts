import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link26Page } from './link26.page';

const routes: Routes = [
  {
    path: '',
    component: Link26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link26PageRoutingModule {}
