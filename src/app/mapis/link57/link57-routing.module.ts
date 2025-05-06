import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link57Page } from './link57.page';

const routes: Routes = [
  {
    path: '',
    component: Link57Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link57PageRoutingModule {}
