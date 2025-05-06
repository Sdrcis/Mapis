import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link34Page } from './link34.page';

const routes: Routes = [
  {
    path: '',
    component: Link34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link34PageRoutingModule {}
