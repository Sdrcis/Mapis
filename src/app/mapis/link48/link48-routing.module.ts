import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link48Page } from './link48.page';

const routes: Routes = [
  {
    path: '',
    component: Link48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link48PageRoutingModule {}
