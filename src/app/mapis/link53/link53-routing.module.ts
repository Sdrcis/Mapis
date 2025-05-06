import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link53Page } from './link53.page';

const routes: Routes = [
  {
    path: '',
    component: Link53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link53PageRoutingModule {}
