import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link9Page } from './link9.page';

const routes: Routes = [
  {
    path: '',
    component: Link9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link9PageRoutingModule {}
