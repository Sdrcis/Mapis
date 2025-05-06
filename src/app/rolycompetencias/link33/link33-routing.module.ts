import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link33Page } from './link33.page';

const routes: Routes = [
  {
    path: '',
    component: Link33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link33PageRoutingModule {}
