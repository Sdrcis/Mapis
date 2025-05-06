import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link39Page } from './link39.page';

const routes: Routes = [
  {
    path: '',
    component: Link39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link39PageRoutingModule {}
