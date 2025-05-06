import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link3Page } from './link3.page';

const routes: Routes = [
  {
    path: '',
    component: Link3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link3PageRoutingModule {}
