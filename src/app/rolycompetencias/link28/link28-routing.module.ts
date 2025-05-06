import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link28Page } from './link28.page';

const routes: Routes = [
  {
    path: '',
    component: Link28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link28PageRoutingModule {}
