import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link21Page } from './link21.page';

const routes: Routes = [
  {
    path: '',
    component: Link21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link21PageRoutingModule {}
