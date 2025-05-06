import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link49Page } from './link49.page';

const routes: Routes = [
  {
    path: '',
    component: Link49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link49PageRoutingModule {}
