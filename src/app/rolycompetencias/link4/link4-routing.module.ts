import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link4Page } from './link4.page';

const routes: Routes = [
  {
    path: '',
    component: Link4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link4PageRoutingModule {}
