import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preg5Page } from './preg5.page';

const routes: Routes = [
  {
    path: '',
    component: Preg5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Preg5PageRoutingModule {}
