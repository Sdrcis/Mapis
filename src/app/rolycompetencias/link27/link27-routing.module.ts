import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link27Page } from './link27.page';

const routes: Routes = [
  {
    path: '',
    component: Link27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link27PageRoutingModule {}
