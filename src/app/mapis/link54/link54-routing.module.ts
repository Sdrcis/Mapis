import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link54Page } from './link54.page';

const routes: Routes = [
  {
    path: '',
    component: Link54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link54PageRoutingModule {}
