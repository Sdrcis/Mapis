import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link56Page } from './link56.page';

const routes: Routes = [
  {
    path: '',
    component: Link56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link56PageRoutingModule {}
