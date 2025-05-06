import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link6Page } from './link6.page';

const routes: Routes = [
  {
    path: '',
    component: Link6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link6PageRoutingModule {}
