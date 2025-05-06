import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link12Page } from './link12.page';

const routes: Routes = [
  {
    path: '',
    component: Link12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link12PageRoutingModule {}
