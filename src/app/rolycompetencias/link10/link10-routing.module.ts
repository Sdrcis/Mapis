import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link10Page } from './link10.page';

const routes: Routes = [
  {
    path: '',
    component: Link10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link10PageRoutingModule {}
