import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link37Page } from './link37.page';

const routes: Routes = [
  {
    path: '',
    component: Link37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link37PageRoutingModule {}
