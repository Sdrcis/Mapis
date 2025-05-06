import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link2Page } from './link2.page';

const routes: Routes = [
  {
    path: '',
    component: Link2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link2PageRoutingModule {}
