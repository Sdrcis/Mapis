import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link47Page } from './link47.page';

const routes: Routes = [
  {
    path: '',
    component: Link47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link47PageRoutingModule {}
