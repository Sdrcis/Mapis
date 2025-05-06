import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Link16Page } from './link16.page';

const routes: Routes = [
  {
    path: '',
    component: Link16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Link16PageRoutingModule {}
