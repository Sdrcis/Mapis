import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link19Page } from './link19.page';

const routes: Routes = [
  {
    path: '',
    component: Link19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link19PageRoutingModule {}
