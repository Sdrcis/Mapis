import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link40Page } from './link40.page';

const routes: Routes = [
  {
    path: '',
    component: Link40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link40PageRoutingModule {}
