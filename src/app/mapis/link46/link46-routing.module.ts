import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link46Page } from './link46.page';

const routes: Routes = [
  {
    path: '',
    component: Link46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link46PageRoutingModule {}
