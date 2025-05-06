import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link31Page } from './link31.page';

const routes: Routes = [
  {
    path: '',
    component: Link31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link31PageRoutingModule {}
