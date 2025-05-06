import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link36Page } from './link36.page';

const routes: Routes = [
  {
    path: '',
    component: Link36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link36PageRoutingModule {}
