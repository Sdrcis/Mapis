import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link17Page } from './link17.page';

const routes: Routes = [
  {
    path: '',
    component: Link17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link17PageRoutingModule {}
