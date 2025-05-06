import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link32Page } from './link32.page';

const routes: Routes = [
  {
    path: '',
    component: Link32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link32PageRoutingModule {}
