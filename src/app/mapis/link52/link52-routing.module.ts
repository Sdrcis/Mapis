import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link52Page } from './link52.page';

const routes: Routes = [
  {
    path: '',
    component: Link52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link52PageRoutingModule {}
