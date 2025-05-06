import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link23Page } from './link23.page';

const routes: Routes = [
  {
    path: '',
    component: Link23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link23PageRoutingModule {}
