import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link60Page } from './link60.page';

const routes: Routes = [
  {
    path: '',
    component: Link60Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link60PageRoutingModule {}
